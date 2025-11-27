import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { SchoolService } from './schools.service';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';

@ApiTags('School')
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new school',
    description: 'Creates a new school record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School successfully created',
    type: School,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolDto,
    description: 'School data to create',
  })
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Post('department')
  @ApiOperation({
    summary: 'Create a new school deaprtment',
    description: 'Creates a new school deaprtment record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School deaprtment successfully created',
    type: School,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateDepartmentDto,
    description: 'School deaprtment data to create',
  })
  createDepartment(@Body() cdDto: CreateDepartmentDto) {
    return this.schoolService.createDepartment(cdDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all schools',
    description: 'Retrieves a list of all schools in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all schools',
    type: [School],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school by ID',
    description: 'Retrieves a specific school by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school',
    type: School,
  })
  @ApiResponse({ status: 404, description: 'School not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update school',
    description: 'Updates an existing school record',
  })
  @ApiResponse({
    status: 200,
    description: 'School successfully updated',
    type: School,
  })
  @ApiResponse({ status: 404, description: 'School not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateSchoolDto,
    description: 'School data to update',
  })
  update(@Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(updateSchoolDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school',
    description: 'Deletes an school record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolService.remove(id);
  }
}
