import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherClassesService } from './teacher-classes.service';
import { CreateTeacherClassDto } from './dto/create-teacher-class.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { TeacherClass } from './entities/teacher-class.entity';

@ApiTags('TeacherClasses')
@ApiExcludeController()
@Controller('teacher-classes')
export class TeacherClassesController {
  constructor(private readonly teacherClassesService: TeacherClassesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new teacher-class relationship',
    description: 'Creates a new relationship between a teacher and a class',
  })
  @ApiResponse({
    status: 201,
    description: 'Teacher-class relationship successfully created',
    type: TeacherClass,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateTeacherClassDto,
    description: 'Teacher-class relationship data to create',
  })
  create(@Body() createTeacherClassDto: CreateTeacherClassDto) {
    return this.teacherClassesService.create(createTeacherClassDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all teacher-class relationships',
    description: 'Retrieves a list of all teacher-class relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all teacher-class relationships',
    type: [TeacherClass],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.teacherClassesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get teacher-class relationship by ID',
    description: 'Retrieves a specific teacher-class relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved teacher-class relationship',
    type: TeacherClass,
  })
  @ApiResponse({ status: 404, description: 'Teacher-class relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Teacher-class relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.teacherClassesService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete teacher-class relationship',
    description: 'Deletes a teacher-class relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Teacher-class relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Teacher-class relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Teacher-class relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.teacherClassesService.remove(id);
  }
}