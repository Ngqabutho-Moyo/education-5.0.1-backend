import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentSubjectsService } from './department-subjects.service';
import { CreateDepartmentSubjectDto } from './dto/create-department-subject.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { DepartmentSubject } from './entities/department-subject.entity';

@ApiExcludeController()
@ApiTags('DepartmentSubjects')
@Controller('department-subjects')
export class DepartmentSubjectsController {
  constructor(private readonly departmentSubjectsService: DepartmentSubjectsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new department-subject relationship',
    description: 'Creates a new relationship between a department and a subject',
  })
  @ApiResponse({
    status: 201,
    description: 'Department-subject relationship successfully created',
    type: DepartmentSubject,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateDepartmentSubjectDto,
    description: 'Department-subject relationship data to create',
  })
  create(@Body() createDepartmentSubjectDto: CreateDepartmentSubjectDto) {
    return this.departmentSubjectsService.create(createDepartmentSubjectDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all department-subject relationships',
    description: 'Retrieves a list of all department-subject relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all department-subject relationships',
    type: [DepartmentSubject],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.departmentSubjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get department-subject relationship by ID',
    description: 'Retrieves a specific department-subject relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved department-subject relationship',
    type: DepartmentSubject,
  })
  @ApiResponse({ status: 404, description: 'Department-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Department-subject relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.departmentSubjectsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete department-subject relationship',
    description: 'Deletes a department-subject relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Department-subject relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Department-subject relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Department-subject relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.departmentSubjectsService.remove(id);
  }
}