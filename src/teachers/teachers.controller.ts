import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto, EnrolStudentDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeEndpoint,
} from '@nestjs/swagger';
import { Teacher } from './entities/teacher.entity';
import { CreateResourceDto } from 'src/resources/dto/create-resource.dto';
import { Resource } from 'src/resources/entities/resource.entity';
import { Assignment } from 'src/assignments/entities/assignment.entity';
import { CreateAssignmentDto } from 'src/assignments/dto/create-assignment.dto';
import { CreateClassDto } from 'src/classes/dto/create-class.dto';

@ApiTags('Teacher')
@Controller('teacher')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @ApiExcludeEndpoint()
  @Post()
  @ApiOperation({
    summary: 'Create a new teacher',
    description: 'Creates a new teacher record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Teacher successfully created',
    type: Teacher,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateTeacherDto,
    description: 'Teacher data to create',
  })
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Post('resource')
  @ApiOperation({
    summary: 'Create a new resource',
    description: 'Creates a new resource record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Syllabus resource successfully created',
    type: Resource,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateResourceDto,
    description: 'Resource data to create',
  })
  postResource(@Body() resourceDto: CreateResourceDto) {
    return this.teachersService.postResource(resourceDto);
  }

  @Post('assignment')
  @ApiOperation({
    summary: 'Create a new assignment',
    description: 'Creates a new assignment record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Syllabus assignment successfully created',
    type: Assignment,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateAssignmentDto,
    description: 'Assignment data to create',
  })
  postAssgnment(@Body() assignmentDto: CreateAssignmentDto) {
    return this.teachersService.postAssgnment(assignmentDto);
  }

  @Post('enrol')
  @ApiOperation({
    summary: 'Enrol a student',
    description: 'Enrol a student into a given class',
  })
  @ApiResponse({
    status: 200,
    description: 'Student enrolled successfully',
    type: EnrolStudentDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: EnrolStudentDto,
    description: 'Enrollment data',
  })
  enrolStudentIntoClass(@Body() enrolStudentDto: EnrolStudentDto) {
    return this.teachersService.enrolStudentIntoClass(enrolStudentDto);
  }

  @Post('class')
  @ApiOperation({
    summary: 'Create a class',
    description: 'Create a class for a given subject',
  })
  @ApiResponse({
    status: 200,
    description: 'Class created successfully',
    type: EnrolStudentDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateClassDto,
    description: 'Class data',
  })
  createClass(@Body() classDto: CreateClassDto) {
    return this.teachersService.createClass(classDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  @ApiOperation({
    summary: 'Get all teachers',
    description: 'Retrieves a list of all teachers in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all teachers',
    type: [Teacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':syllabus_id/resources')
  @ApiOperation({
    summary: 'Get all resources for a given syllabus',
    description: 'Retrieves a list of all resources in a syllabus',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all resources',
    type: [Teacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  viewResourcesForClass(@Param('syllabus_id') syllabus_id: string) {
    return this.teachersService.viewResourcesForClass(syllabus_id);
  }

  @Get(':syllabus_id/assignments')
  @ApiOperation({
    summary: 'Get all assignments for a given syllabus',
    description: 'Retrieves a list of all assignments in a syllabus',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all assignments',
    type: [Teacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  viewAssignmentsForClass(@Param('syllabus_id') syllabus_id: string) {
    return this.teachersService.viewAssignmentsForClass(syllabus_id);
  }

  @Get(':teacher_id/classes')
  @ApiOperation({
    summary: 'Get all classes for a given teacher',
    description: 'Retrieves a list of all classes for a given teacher',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all classes',
    type: [Teacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  viewClasses(@Param('teacher_id') syllabus_id: string) {
    return this.teachersService.viewClasses(syllabus_id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get teacher by ID',
    description: 'Retrieves a specific teacher by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved teacher',
    type: Teacher,
  })
  @ApiResponse({ status: 404, description: 'Teacher not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Teacher UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update teacher',
    description: 'Updates an existing teacher record',
  })
  @ApiResponse({
    status: 200,
    description: 'Teacher successfully updated',
    type: Teacher,
  })
  @ApiResponse({ status: 404, description: 'Teacher not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateTeacherDto,
    description: 'Teacher data to update',
  })
  update(@Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete teacher',
    description: 'Deletes a teacher record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Teacher successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Teacher not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Teacher UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.teachersService.remove(id);
  }
}
