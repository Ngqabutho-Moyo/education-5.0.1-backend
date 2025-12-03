import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiExcludeEndpoint,
} from '@nestjs/swagger';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { SchoolService } from './schools.service';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';
import { CreateSubjectDto } from 'src/subjects/dto/create-subject.dto';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { CreateTeacherDto } from 'src/teachers/dto/create-teacher.dto';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'rxjs';
import { Department } from 'src/departments/entities/department.entity';

@ApiTags('School Administrator')
@Controller('school-administrator')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @ApiExcludeEndpoint()
  @Post()
  @ApiOperation({
    summary: 'Create a new school',
    description: 'Creates a new school record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School successfully created',
    type: School,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolDto,
    description: 'School data to create',
  })
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Post('department')
  @ApiOperation({
    summary: 'Create a new school deaprtment',
    description: 'Creates a new school deaprtment record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School deaprtment successfully created',
    type: Department,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateDepartmentDto,
    description: 'School deaprtment data to create',
  })
  createDepartment(@Body() departmentDto: CreateDepartmentDto) {
    return this.schoolService.createDepartment(departmentDto);
  }

  @Post('subject')
  @ApiOperation({
    summary: 'Create a new school subject',
    description: 'Creates a new school subject record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School subject successfully created',
    type: Subject,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSubjectDto,
    description: 'School subject data to create',
  })
  createSubject(@Body() subjectDto: CreateSubjectDto) {
    return this.schoolService.createSubject(subjectDto);
  }

  @Post('student')
  @ApiOperation({
    summary: 'Create a new school student',
    description: 'Creates a new school student record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School student successfully created',
    type: Student,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateStudentDto,
    description: 'School student data to create',
  })
  createStudent(@Body() studentDto: CreateStudentDto) {
    return this.schoolService.createStudent(studentDto);
  }

  @Post('teacher')
  @ApiOperation({
    summary: 'Create a new school teacher',
    description: 'Creates a new school teacher record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School teacher successfully created',
    type: Teacher,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateTeacherDto,
    description: 'School teacher data to create',
  })
  createTeacher(@Body() teacherDto: CreateTeacherDto) {
    return this.schoolService.createTeacher(teacherDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  @ApiOperation({
    summary: 'Get all schools',
    description: 'Retrieves a list of all schools in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all schools',
    type: [School],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolService.findAll();
  }

  @Get('teachers/:school_id')
  @ApiOperation({
    summary: 'Get all teachers for a specific school',
    description: 'Retrieves a list of all school teachers in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school teachers',
    type: [Teacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAllTeachersForSchool(@Param('school_id') school_id: string) {
    return this.schoolService.findAllTeachersForSchool(school_id);
  }

  @Get('students/:school_id')
  @ApiOperation({
    summary: 'Get all students for a specific school',
    description: 'Retrieves a list of all school students in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school students',
    type: [Student],
  })
  findAllStudentsForSchool(@Param('school_id') school_id: string) {
    return this.schoolService.findAllStudentsForSchool(school_id);
  }

  @Get('departments/:school_id')
  @ApiOperation({
    summary: 'Get all departments for a specific school',
    description: 'Retrieves a list of all school departments in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school departments',
    type: [Department],
  })
  findAllDepartmentsForSchool(@Param('school_id') school_id: string) {
    return this.schoolService.findAllDepartmentsForSchool(school_id);
  }

  @Get('subjects/:school_id')
  @ApiOperation({
    summary: 'Get all subjects for a specific school',
    description: 'Retrieves a list of all school subjects in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school subjects',
    type: [Subject],
  })
  findAllSubjectsForSchool(@Param('school_id') school_id: string) {
    return this.schoolService.findAllSubjectsForSchool(school_id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school by ID',
    description: 'Retrieves a specific school by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school',
    type: School,
  })
  @ApiResponse({ status: 404, description: 'School not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update school',
    description: 'Updates an existing school record',
  })
  @ApiResponse({
    status: 200,
    description: 'School successfully updated',
    type: School,
  })
  @ApiResponse({ status: 404, description: 'School not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateSchoolDto,
    description: 'School data to update',
  })
  update(@Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(updateSchoolDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school',
    description: 'Deletes an school record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolService.remove(id);
  }
}
