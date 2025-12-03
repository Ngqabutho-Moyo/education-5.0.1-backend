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
import { CreateSchoolAdministratorDto } from './dto/create-school-administrator.dto';
import { UpdateSchoolAdministratorDto } from './dto/update-school-administrator.dto';
import { SchoolAdministrator } from './entities/school-administrator.entity';
import { SchoolAdministratorsService } from './school-administrator.service';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';
import { CreateSubjectDto } from 'src/subjects/dto/create-subject.dto';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { CreateTeacherDto } from 'src/teachers/dto/create-teacher.dto';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Student } from 'src/students/entities/student.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Subject } from 'src/subjects/entities/subject.entity';

@ApiTags('School Administrator')
@Controller('school-administrator')
export class SchoolAdministratorsController {
  constructor(private readonly schoolAdministratorsService: SchoolAdministratorsService) {}

  @ApiExcludeEndpoint()
  @Post()
  @ApiOperation({
    summary: 'Create a new school administrator',
    description: 'Creates a new school administrator record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School administrator successfully created',
    type: SchoolAdministrator,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolAdministratorDto,
    description: 'School administrator data to create',
  })
  create(@Body() createSchoolAdministratorDto: CreateSchoolAdministratorDto) {
    return this.schoolAdministratorsService.create(createSchoolAdministratorDto);
  }

  @Post('department')
  @ApiOperation({
    summary: 'Create a new school department',
    description: 'Creates a new school department record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School department successfully created',
    type: Department,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateDepartmentDto,
    description: 'School department data to create',
  })
  createDepartment(@Body() departmentDto: CreateDepartmentDto) {
    return this.schoolAdministratorsService.createDepartment(departmentDto);
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
    return this.schoolAdministratorsService.createSubject(subjectDto);
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
    return this.schoolAdministratorsService.createStudent(studentDto);
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
    return this.schoolAdministratorsService.createTeacher(teacherDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  @ApiOperation({
    summary: 'Get all school administrators',
    description: 'Retrieves a list of all school administrators in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school administrators',
    type: [SchoolAdministrator],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolAdministratorsService.findAll();
  }

  @Get('teachers/:school_id')
  @ApiOperation({
    summary: 'Get all teachers for a specific school',
    description: 'Retrieves a list of all teachers for a specific school',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school teachers',
    type: [Teacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'school_id',
    type: String,
    description: 'School UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  findAllTeachersForSchool(@Param('school_id') school_id: string) {
    return this.schoolAdministratorsService.findAllTeachersForSchool(school_id);
  }

  @Get('students/:school_id')
  @ApiOperation({
    summary: 'Get all students for a specific school',
    description: 'Retrieves a list of all students for a specific school',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school students',
    type: [Student],
  })
  @ApiParam({
    name: 'school_id',
    type: String,
    description: 'School UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  findAllStudentsForSchool(@Param('school_id') school_id: string) {
    return this.schoolAdministratorsService.findAllStudentsForSchool(school_id);
  }

  @Get('departments/:school_id')
  @ApiOperation({
    summary: 'Get all departments for a specific school',
    description: 'Retrieves a list of all departments for a specific school',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school departments',
    type: [Department],
  })
  @ApiParam({
    name: 'school_id',
    type: String,
    description: 'School UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  findAllDepartmentsForSchool(@Param('school_id') school_id: string) {
    return this.schoolAdministratorsService.findAllDepartmentsForSchool(school_id);
  }

  @Get('subjects/:school_id')
  @ApiOperation({
    summary: 'Get all subjects for a specific school',
    description: 'Retrieves a list of all subjects for a specific school',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school subjects',
    type: [Subject],
  })
  @ApiParam({
    name: 'school_id',
    type: String,
    description: 'School UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  findAllSubjectsForSchool(@Param('school_id') school_id: string) {
    return this.schoolAdministratorsService.findAllSubjectsForSchool(school_id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school administrator by ID',
    description: 'Retrieves a specific school administrator by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school administrator',
    type: SchoolAdministrator,
  })
  @ApiResponse({ status: 404, description: 'School administrator not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School administrator UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolAdministratorsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update school administrator',
    description: 'Updates an existing school administrator record',
  })
  @ApiResponse({
    status: 200,
    description: 'School administrator successfully updated',
    type: SchoolAdministrator,
  })
  @ApiResponse({ status: 404, description: 'School administrator not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateSchoolAdministratorDto,
    description: 'School administrator data to update',
  })
  update(@Body() updateSchoolAdministratorDto: UpdateSchoolAdministratorDto) {
    return this.schoolAdministratorsService.update(updateSchoolAdministratorDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school administrator',
    description: 'Deletes a school administrator record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School administrator successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School administrator not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School administrator UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolAdministratorsService.remove(id);
  }
}