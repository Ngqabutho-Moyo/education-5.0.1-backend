import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Department } from './entities/department.entity';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new department',
    description: 'Creates a new department record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Department successfully created',
    type: Department,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateDepartmentDto,
    description: 'Department data to create',
  })
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all departments',
    description: 'Retrieves a list of all departments in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all departments',
    type: [Department],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get department by ID',
    description: 'Retrieves a specific department by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved department',
    type: Department,
  })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Department UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update department',
    description: 'Updates an existing department record',
  })
  @ApiResponse({
    status: 200,
    description: 'Department successfully updated',
    type: Department,
  })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateDepartmentDto,
    description: 'Department data to update',
  })
  update(@Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(updateDepartmentDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete department',
    description: 'Deletes a department record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Department successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Department UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(id);
  }
}