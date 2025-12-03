import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherSubjectsService } from './teacher-subjects.service';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { TeacherSubject } from './entities/teacher-subject.entity';

@ApiTags('TeacherSubjects')
@ApiExcludeController()
@Controller('teacher-subjects')
export class TeacherSubjectsController {
  constructor(private readonly teacherSubjectsService: TeacherSubjectsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new teacher-subject relationship',
    description: 'Creates a new relationship between a teacher and a subject',
  })
  @ApiResponse({
    status: 201,
    description: 'Teacher-subject relationship successfully created',
    type: TeacherSubject,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateTeacherSubjectDto,
    description: 'Teacher-subject relationship data to create',
  })
  create(@Body() createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.teacherSubjectsService.create(createTeacherSubjectDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all teacher-subject relationships',
    description: 'Retrieves a list of all teacher-subject relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all teacher-subject relationships',
    type: [TeacherSubject],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.teacherSubjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get teacher-subject relationship by ID',
    description: 'Retrieves a specific teacher-subject relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved teacher-subject relationship',
    type: TeacherSubject,
  })
  @ApiResponse({ status: 404, description: 'Teacher-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Teacher-subject relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.teacherSubjectsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete teacher-subject relationship',
    description: 'Deletes a teacher-subject relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Teacher-subject relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Teacher-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Teacher-subject relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.teacherSubjectsService.remove(id);
  }
}