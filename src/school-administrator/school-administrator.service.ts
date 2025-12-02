/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger } from '@nestjs/common';
import { CreateSchoolAdministratorDto } from './dto/create-school-administrator.dto';
import { UpdateSchoolAdministratorDto } from './dto/update-school-administrator.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';
import { Department } from 'src/departments/entities/department.entity';
import { CreateSchoolDepartmentDto } from 'src/school-departments/dto/create-school-department.dto';
import { SchoolDepartment } from 'src/school-departments/entities/school-department.entity';
import { CreateSchoolStudentDto } from 'src/school-students/dto/create-school-student.dto';
import { CreateSchoolSubjectDto } from 'src/school-subjects/dto/create-school-subject.dto';
import { CreateSchoolTeacherDto } from 'src/school-teachers/dto/create-school-teacher.dto';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { Student } from 'src/students/entities/student.entity';
import { CreateSubjectDto } from 'src/subjects/dto/create-subject.dto';
import { CreateTeacherDto } from 'src/teachers/dto/create-teacher.dto';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { PostgresRest } from 'src/common/postgresrest/postgresrest.service';
import { Subject } from 'src/subjects/entities/subject.entity';
import { TeachersService } from 'src/teachers/teachers.service';
import { StudentsService } from 'src/students/students.service';

@Injectable()
export class SchoolAdministratorsService {
  private readonly logger = new Logger(SchoolAdministratorsService.name)
  constructor(private readonly crudService: CrudService, private readonly postgresrest: PostgresRest, private readonly teachersService: TeachersService, private readonly studentsService: StudentsService) {}
  
  async create(createSchoolAdministratorDto: CreateSchoolAdministratorDto) {
    return await this.crudService.create('school_administrator', createSchoolAdministratorDto, 'SCHADM');
  }

  async createDepartment(departmentDto: CreateDepartmentDto) {
      // Check if the department already exists
      try {
        const departmentExistsResponse = await this.crudService.findOneByColumn(
          'departments',
          'name',
          departmentDto.name,
        );
        if (departmentExistsResponse instanceof GeneralErrorResponseDto) {
          return departmentExistsResponse;
        }
        if (departmentExistsResponse.data) {
          return new GeneralErrorResponseDto(
            403,
            `${departmentDto.name} already exists`,
          );
        }
        const deptResponse = await this.crudService.create(
          'departments',
          departmentDto,
          'DEPT',
        );
        if (deptResponse instanceof GeneralErrorResponseDto) {
          return deptResponse;
        }
        const dept = deptResponse.data as Department;
        const sdDto = new CreateSchoolDepartmentDto();
        sdDto.school_id = departmentDto.school_id;
        sdDto.department_id = dept.id;
        sdDto.status = 'created';
        const sdResponse = await this.crudService.create(
          'school_departments',
          sdDto,
        );
        if (sdResponse instanceof GeneralErrorResponseDto) {
          return sdResponse;
        }
        return new SuccessResponseDto(
          201,
          'Department created successfully',
          sdResponse.data as SchoolDepartment,
        );
      } catch (error) {
        this.logger.error('createDepartment error', error);
        return new GeneralErrorResponseDto(500, 'createDepartment error', error);
      }
    }
  
    async createSubject(subjectDto: CreateSubjectDto) {
      try {
        const subjectExistsResponse = await this.crudService.findOneByColumn(
          'subjects',
          'name',
          subjectDto.name!,
        );
        if (subjectExistsResponse instanceof GeneralErrorResponseDto) {
          return subjectExistsResponse;
        }
        if (subjectExistsResponse.data) {
          return new GeneralErrorResponseDto(
            403,
            `${subjectDto.name} already exists`,
          );
        }
        const subjectResponse = await this.crudService.create(
          'subjects',
          subjectDto,
          'SUB',
        );
        if (subjectResponse instanceof GeneralErrorResponseDto) {
          return subjectResponse;
        }
        const subject = subjectResponse.data as Subject;
        const schoolSubjectDto = new CreateSchoolSubjectDto();
        schoolSubjectDto.school_id = subjectDto.school_id;
        schoolSubjectDto.subject_id = subject.id;
        schoolSubjectDto.status = 'active';
  
        const schoolSubjectResponse = await this.crudService.create(
          'school_subjects',
          schoolSubjectDto,
        );
        if (schoolSubjectResponse instanceof GeneralErrorResponseDto) {
          return schoolSubjectResponse;
        }
        return new SuccessResponseDto(
          201,
          'Subject created successfully',
          subjectResponse.data as object,
        );
      } catch (e) {
        return new GeneralErrorResponseDto(500, 'createSubject error', e);
      }
    }
  
    async createTeacher(teacherDto: CreateTeacherDto) {
      try {
        // Check for an existing teacher
        const { data: teacherExists, error: teacherExistsError } =
          await this.postgresrest
            .from('teacher')
            .select()
            .eq('first_name', teacherDto.first_name)
            .eq('last_name', teacherDto.last_name)
            .limit(1)
            .single();
        if (teacherExistsError && teacherExistsError.code != 'PGRST116') {
          this.logger.error(
            'Faield to fetch existing teacher',
            teacherExistsError,
          );
          return new GeneralErrorResponseDto(400, 'Failed to fetch existing teacher');
        }
        if (teacherExists) {
          return new GeneralErrorResponseDto(
            403,
            `${teacherDto.first_name} ${teacherDto.last_name} already exists`,
          );
        }
  
        // Create the teacher
        const createTeacherResponse = await this.teachersService.create(teacherDto);
        if (createTeacherResponse instanceof GeneralErrorResponseDto) {
          return createTeacherResponse;
        }
  
        const teacher = createTeacherResponse.data.user as Teacher;
  
        // Create the teacher-school relationship
        const stDto = new CreateSchoolTeacherDto();
        stDto.school_id = teacherDto.school_id;
        stDto.teacher_id = teacher.id;
        stDto.status = 'active';
        const schoolTeacherResponse = await this.crudService.create(
          'school_teachers',
          stDto,
        );
        if (schoolTeacherResponse instanceof GeneralErrorResponseDto) {
          return schoolTeacherResponse;
        }
        return new SuccessResponseDto(
          201,
          'Teacher created successfully',
          teacher,
        );
      } catch (e) {
        return new GeneralErrorResponseDto(500, 'createTeacher error', e);
      }
    }
  
    async createStudent(studentDto: CreateStudentDto) {
      try {
        // Check if studet exists
        const { data: studentExists, error: studentExistsError } =
          await this.postgresrest
            .from('student')
            .select()
            .eq('first_name', studentDto.first_name)
            .eq('last_name', studentDto.last_name)
            .limit(1)
            .single();
        if (studentExistsError && studentExistsError.code != 'PGRST116') {
          this.logger.error(
            'Failed to fetch existing student',
            studentExistsError,
          );
          return new GeneralErrorResponseDto(400, 'Failed to fetch existing student');
        }
        if (studentExists) {
          return new GeneralErrorResponseDto(
            403,
            `${studentDto.first_name} ${studentDto.last_name} already exists`,
          );
        }
  
        // Create the student
        const createStudentResponse = await this.studentsService.create(studentDto);
        if (createStudentResponse instanceof GeneralErrorResponseDto) {
          return createStudentResponse;
        }
        const student = createStudentResponse.data.user as Student;
        this.logger.debug(createStudentResponse.data);
  
        // Create the schoo-student relationship
        const schoolStudentDto = new CreateSchoolStudentDto();
        schoolStudentDto.school_id = studentDto.school_id;
        schoolStudentDto.student_id = student.id;
        schoolStudentDto.status = 'created';
  
        const schoolStudentResponse = await this.crudService.create(
          'school_students',
          schoolStudentDto,
        );
        if (schoolStudentResponse instanceof GeneralErrorResponseDto) {
          return schoolStudentResponse;
        }
        return new SuccessResponseDto(
          201,
          'Student created successfully',
          student,
        );
      } catch (e) {
        this.logger.error('createStudent error', e);
        return new GeneralErrorResponseDto(500, 'createStudent error', e);
      }
    }
  
    async findAll() {
      return await this.crudService.findAll('schools');
    }
  
    async findAllTeachersForSchool(school_id: string){
      return await this.crudService.findAllByColumn('teacher', 'school_id', school_id);
    }
  
    async findAllStudentsForSchool(school_id: string){
      return await this.crudService.findAllByColumn('student', 'school_id', school_id);
    }
  
    async findAllDepartmentsForSchool(school_id: string){
      return await this.crudService.findAllByColumn('departments', 'school_id', school_id);
    }
  
    async findAllSubjectsForSchool(school_id: string){
      return await this.crudService.findAllByColumn('subjects', 'school_id', school_id);
    }

  async findOne(id: string) {
    return await this.crudService.findOne('school_administrator', id);
  }

  async update(updateSchoolAdministratorDto: UpdateSchoolAdministratorDto) {
    return await this.crudService.update('school_administrator', updateSchoolAdministratorDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('school_administrator', id);
  }
}