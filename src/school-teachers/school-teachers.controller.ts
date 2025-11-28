import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolTeachersService } from './school-teachers.service';
import { CreateSchoolTeacherDto } from './dto/create-school-teacher.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SchoolTeacher } from './entities/school-teacher.entity';

@ApiTags('SchoolTeachers')
@ApiExcludeController()
@Controller('school-teachers')
export class SchoolTeachersController {
  constructor(private readonly schoolTeachersService: SchoolTeachersService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new school-teacher relationship',
    description: 'Creates a new relationship between a school and a teacher',
  })
  @ApiResponse({
    status: 201,
    description: 'School-teacher relationship successfully created',
    type: SchoolTeacher,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolTeacherDto,
    description: 'School-teacher relationship data to create',
  })
  create(@Body() createSchoolTeacherDto: CreateSchoolTeacherDto) {
    return this.schoolTeachersService.create(createSchoolTeacherDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all school-teacher relationships',
    description: 'Retrieves a list of all school-teacher relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all school-teacher relationships',
    type: [SchoolTeacher],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.schoolTeachersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school-teacher relationship by ID',
    description: 'Retrieves a specific school-teacher relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school-teacher relationship',
    type: SchoolTeacher,
  })
  @ApiResponse({ status: 404, description: 'School-teacher relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-teacher relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.schoolTeachersService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete school-teacher relationship',
    description: 'Deletes a school-teacher relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'School-teacher relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'School-teacher relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'School-teacher relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.schoolTeachersService.remove(id);
  }
}