import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolStudentsService } from './school-students.service';
import { CreateSchoolStudentDto } from './dto/create-school-student.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SchoolStudent } from './entities/school-student.entity';

@ApiTags('SchoolStudents')
@ApiExcludeController()
@Controller('school-students')
export class SchoolStudentsController {
  constructor(private readonly schoolStudentsService: SchoolStudentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new school-student relationship',
    description: 'Creates a new relationship between a school and a student',
  })
  @ApiResponse({
    status: 201,
    description: 'School-student relationship successfully created',
    type: SchoolStudent,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolStudentDto,
    description: 'School-student relationship data to create',
  })
  create(@Body() createSchoolStudentDto: CreateSchoolStudentDto) {
    return this.schoolStudentsService.create(createSchoolStudentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all school-student relationships',
    description: 'Retrieves a list of all school-student relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school-student relationships',
    type: [SchoolStudent],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolStudentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school-student relationship by ID',
    description: 'Retrieves a specific school-student relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school-student relationship',
    type: SchoolStudent,
  })
  @ApiResponse({ status: 404, description: 'School-student relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-student relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolStudentsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school-student relationship',
    description: 'Deletes a school-student relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School-student relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School-student relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-student relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolStudentsService.remove(id);
  }
}