import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentTeachersService } from './department-teachers.service';
import { CreateDepartmentTeacherDto } from './dto/create-department-teacher.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { DepartmentTeacher } from './entities/department-teacher.entity';

@ApiTags('DepartmentTeachers')
@ApiExcludeController()
@Controller('department-teachers')
export class DepartmentTeachersController {
  constructor(private readonly departmentTeachersService: DepartmentTeachersService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new department-teacher relationship',
    description: 'Creates a new relationship between a department and a teacher',
  })
  @ApiResponse({
    status: 201,
    description: 'Department-teacher relationship successfully created',
    type: DepartmentTeacher,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateDepartmentTeacherDto,
    description: 'Department-teacher relationship data to create',
  })
  create(@Body() createDepartmentTeacherDto: CreateDepartmentTeacherDto) {
    return this.departmentTeachersService.create(createDepartmentTeacherDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all department-teacher relationships',
    description: 'Retrieves a list of all department-teacher relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all department-teacher relationships',
    type: [DepartmentTeacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.departmentTeachersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get department-teacher relationship by ID',
    description: 'Retrieves a specific department-teacher relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved department-teacher relationship',
    type: DepartmentTeacher,
  })
  @ApiResponse({ status: 404, description: 'Department-teacher relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Department-teacher relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.departmentTeachersService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete department-teacher relationship',
    description: 'Deletes a department-teacher relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Department-teacher relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Department-teacher relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Department-teacher relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.departmentTeachersService.remove(id);
  }
}