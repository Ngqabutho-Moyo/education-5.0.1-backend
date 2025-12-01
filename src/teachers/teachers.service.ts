/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable, Logger } from '@nestjs/common';
import { CreateTeacherDto, EnrolStudentDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';
import { PostgresRest } from 'src/common/postgresrest/postgresrest.service';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { CreateResourceDto } from 'src/resources/dto/create-resource.dto';
import { Resource } from 'src/resources/entities/resource.entity';
import { CreateAssignmentDto } from 'src/assignments/dto/create-assignment.dto';
import { CreateSyllabusResourceDto } from 'src/syllabus-resources/dto/create-syllabus-resource.dto';
import { Assignment } from 'src/assignments/entities/assignment.entity';
import { CreateSyllabusAssignmentDto } from 'src/syllabus-assignments/dto/create-syllabus-assignment.dto';
import { CreateClassDto } from 'src/classes/dto/create-class.dto';
import { CreateTeacherClassDto } from 'src/teacher-classes/dto/create-teacher-class.dto';
import { Class } from 'src/classes/entities/class.entity';

@Injectable()
export class TeachersService {
  private readonly logger = new Logger(TeachersService.name);

  constructor(
    private readonly crudService: CrudService,
    private readonly authService: AuthService,
    private readonly postgresrest: PostgresRest,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return await this.authService.signup('teacher', createTeacherDto, 'TCH');
  }

  async enrolStudentIntoClass(enrolStudentDto: EnrolStudentDto) {
    try {
      const response = await this.crudService.create('student_classes', enrolStudentDto);
      if(response instanceof GeneralErrorResponseDto){
        return response
      }
      this.logger.log('Student has been enrolled', response.data);
      return new SuccessResponseDto(200, 'Student enrolled successfully', response.data);
    } catch (error) {
      this.logger.log('enrolStudentIntoClass error', error);
      return new GeneralErrorResponseDto(500, 'enrolStudentIntoClass error', error)
    }
  }

  async postResource(resourceDto: CreateResourceDto) {
    try {
      // Check if the resource already exists for the given syllabus
      const syllabusExistsResponse = await this.crudService.findOneByColumn(
        'resources',
        'name',
        resourceDto.name,
      );
      if (syllabusExistsResponse instanceof GeneralErrorResponseDto) {
        return syllabusExistsResponse;
      }
      if (syllabusExistsResponse.data) {
        return new GeneralErrorResponseDto(
          400,
          `Resource ${resourceDto.name} already exists`,
        );
      }

      // Create the resource
      const createResourceResponse = await this.crudService.create(
        'resources',
        resourceDto,
        'RES',
      );
      if (createResourceResponse instanceof GeneralErrorResponseDto) {
        return createResourceResponse;
      }

      const resource = createResourceResponse.data as Resource;
      
      // Create the syllabus-resource relationship
      const srDto = new CreateSyllabusResourceDto();
      srDto.syllabus_id = resourceDto.syllabus_id;
      srDto.resource_id = resource.id;
      srDto.status = 'created';

      const srResponse = await this.crudService.create('syllabus_resources', srDto);
      if(srResponse instanceof GeneralErrorResponseDto){
        return srResponse;
      }

      return new SuccessResponseDto(
        201,
        'Resource created successfully',
        resource,
      );
    } catch (e) {
      this.logger.error('postResource error', e);
      return new GeneralErrorResponseDto(500, 'postResource error', e);
    }
  }

  async viewResourcesForClass(syllabus_id: string){
    return await this.crudService.findAllByColumn('resources', 'syllabus_id', syllabus_id);
  }

  async postAssgnment(assignmentDto: CreateAssignmentDto) {
    try {

      // Create the assignment
      const createAssignmentResponse = await this.crudService.create(
        'assignments',
        assignmentDto,
        'ASN',
      );
      if (createAssignmentResponse instanceof GeneralErrorResponseDto) {
        return createAssignmentResponse;
      }

      const assignment = createAssignmentResponse.data as Assignment;

      // Create the syllabus-assignment relationship
      const saDto = new CreateSyllabusAssignmentDto();
      saDto.syllabus_id = assignmentDto.syllabus_id;
      saDto.assignment_id = assignment.id;
      saDto.status = 'created';

      const saResponse = await this.crudService.create('syllabus_assignments', saDto);
      if(saResponse instanceof GeneralErrorResponseDto){
        return saResponse;
      }

      return new SuccessResponseDto(
        201,
        'Assignment created successfully',
        assignment,
      );
    } catch (e) {
      this.logger.error('postResource error', e);
      return new GeneralErrorResponseDto(500, 'postResource error', e);
    }
  }

  async viewAssignmentsForClass(syllabus_id: string){
    return await this.crudService.findAllByColumn('assignments', 'syllabus_id', syllabus_id);
  }

  async createClass(classDto: CreateClassDto){
    const createClassResponse = await this.crudService.create('classes', classDto, 'CLS');
    if(createClassResponse instanceof GeneralErrorResponseDto){
      return createClassResponse;
    }
    const newClass = createClassResponse.data as Class;
    const tcDto = new CreateTeacherClassDto();
    tcDto.class_id = newClass.id;
    tcDto.teacher_id = classDto.teacher_in_charge;
    tcDto.status = 'created';
    const tcResponse = await this.crudService.create('teacher_classes', tcDto);
    if(tcResponse instanceof GeneralErrorResponseDto){
      return tcResponse;
    }
  }

  async viewClasses(teacher_id: string){
    return await this.crudService.findAllByColumn('classes', 'teacher_in_charge', teacher_id);
  }

  async findAll() {
    return await this.crudService.findAll('teacher');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('teacher', id);
  }

  async update(updateTeacherDto: UpdateTeacherDto) {
    return await this.crudService.update('teacher', updateTeacherDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('teacher', id);
  }
}
