import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolDepartmentsService } from './school-departments.service';
import { CreateSchoolDepartmentDto } from './dto/create-school-department.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SchoolDepartment } from './entities/school-department.entity';

@ApiTags('SchoolDepartments')
@ApiExcludeController()
@Controller('school-departments')
export class SchoolDepartmentsController {
  constructor(private readonly schoolDepartmentsService: SchoolDepartmentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new school-department relationship',
    description: 'Creates a new relationship between a school and a department',
  })
  @ApiResponse({
    status: 201,
    description: 'School-department relationship successfully created',
    type: SchoolDepartment,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolDepartmentDto,
    description: 'School-department relationship data to create',
  })
  create(@Body() createSchoolDepartmentDto: CreateSchoolDepartmentDto) {
    return this.schoolDepartmentsService.create(createSchoolDepartmentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all school-department relationships',
    description: 'Retrieves a list of all school-department relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school-department relationships',
    type: [SchoolDepartment],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolDepartmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school-department relationship by ID',
    description: 'Retrieves a specific school-department relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school-department relationship',
    type: SchoolDepartment,
  })
  @ApiResponse({ status: 404, description: 'School-department relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-department relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolDepartmentsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school-department relationship',
    description: 'Deletes a school-department relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School-department relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School-department relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-department relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolDepartmentsService.remove(id);
  }
}