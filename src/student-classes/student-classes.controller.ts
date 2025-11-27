import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentClassesService } from './student-classes.service';
import { CreateStudentClassDto } from './dto/create-student-class.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { StudentClass } from './entities/student-class.entity';

@ApiTags('StudentClasses')
@ApiExcludeController()
@Controller('student-classes')
export class StudentClassesController {
  constructor(private readonly studentClassesService: StudentClassesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new student-class relationship',
    description: 'Creates a new relationship between a student and a class',
  })
  @ApiResponse({
    status: 201,
    description: 'Student-class relationship successfully created',
    type: StudentClass,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateStudentClassDto,
    description: 'Student-class relationship data to create',
  })
  create(@Body() createStudentClassDto: CreateStudentClassDto) {
    return this.studentClassesService.create(createStudentClassDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all student-class relationships',
    description: 'Retrieves a list of all student-class relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all student-class relationships',
    type: [StudentClass],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.studentClassesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get student-class relationship by ID',
    description: 'Retrieves a specific student-class relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved student-class relationship',
    type: StudentClass,
  })
  @ApiResponse({ status: 404, description: 'Student-class relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student-class relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.studentClassesService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete student-class relationship',
    description: 'Deletes a student-class relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Student-class relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Student-class relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student-class relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.studentClassesService.remove(id);
  }
}