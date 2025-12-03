import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentSubjectsService } from './student-subjects.service';
import { CreateStudentSubjectDto } from './dto/create-student-subject.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { StudentSubject } from './entities/student-subject.entity';

@ApiTags('StudentSubjects')
@ApiExcludeController()
@Controller('student-subjects')
export class StudentSubjectsController {
  constructor(private readonly studentSubjectsService: StudentSubjectsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new student-subject relationship',
    description: 'Creates a new relationship between a student and a subject',
  })
  @ApiResponse({
    status: 201,
    description: 'Student-subject relationship successfully created',
    type: StudentSubject,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateStudentSubjectDto,
    description: 'Student-subject relationship data to create',
  })
  create(@Body() createStudentSubjectDto: CreateStudentSubjectDto) {
    return this.studentSubjectsService.create(createStudentSubjectDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all student-subject relationships',
    description: 'Retrieves a list of all student-subject relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all student-subject relationships',
    type: [StudentSubject],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.studentSubjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get student-subject relationship by ID',
    description: 'Retrieves a specific student-subject relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved student-subject relationship',
    type: StudentSubject,
  })
  @ApiResponse({ status: 404, description: 'Student-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student-subject relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.studentSubjectsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete student-subject relationship',
    description: 'Deletes a student-subject relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Student-subject relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Student-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student-subject relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.studentSubjectsService.remove(id);
  }
}