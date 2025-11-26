import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Student } from './entities/student.entity';

@ApiTags('Student')
@Controller('student')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new student',
    description: 'Creates a new student record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Student successfully created',
    type: Student,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateStudentDto,
    description: 'Student data to create',
  })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all students',
    description: 'Retrieves a list of all students in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all students',
    type: [Student],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get student by ID',
    description: 'Retrieves a specific student by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved student',
    type: Student,
  })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update student',
    description: 'Updates an existing student record',
  })
  @ApiResponse({
    status: 200,
    description: 'Student successfully updated',
    type: Student,
  })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateStudentDto,
    description: 'Student data to update',
  })
  update(@Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete student',
    description: 'Deletes a student record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Student successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
