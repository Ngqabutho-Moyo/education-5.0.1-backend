import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolSubjectsService } from './school-subjects.service';
import { CreateSchoolSubjectDto } from './dto/create-school-subject.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SchoolSubject } from './entities/school-subject.entity';

@ApiTags('SchoolSubjects')
@ApiExcludeController()
@Controller('school-subjects')
export class SchoolSubjectsController {
  constructor(private readonly schoolSubjectsService: SchoolSubjectsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new school-subject relationship',
    description: 'Creates a new relationship between a school and a subject',
  })
  @ApiResponse({
    status: 201,
    description: 'School-subject relationship successfully created',
    type: SchoolSubject,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolSubjectDto,
    description: 'School-subject relationship data to create',
  })
  create(@Body() createSchoolSubjectDto: CreateSchoolSubjectDto) {
    return this.schoolSubjectsService.create(createSchoolSubjectDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all school-subject relationships',
    description: 'Retrieves a list of all school-subject relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school-subject relationships',
    type: [SchoolSubject],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolSubjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school-subject relationship by ID',
    description: 'Retrieves a specific school-subject relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school-subject relationship',
    type: SchoolSubject,
  })
  @ApiResponse({ status: 404, description: 'School-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-subject relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolSubjectsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school-subject relationship',
    description: 'Deletes a school-subject relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School-subject relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-subject relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolSubjectsService.remove(id);
  }
}