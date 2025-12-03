import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SubjectSyllabusService } from './subject-syllabus.service';
import { CreateSubjectSyllabusDto } from './dto/create-subject-syllabus.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SubjectSyllabus } from './entities/subject-syllabus.entity';

@ApiTags('SubjectSyllabus')
@ApiExcludeController()
@Controller('subject-syllabus')
export class SubjectSyllabusController {
  constructor(private readonly subjectSyllabusService: SubjectSyllabusService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new subject-syllabus relationship',
    description: 'Creates a new relationship between a subject and a syllabus',
  })
  @ApiResponse({
    status: 201,
    description: 'Subject-syllabus relationship successfully created',
    type: SubjectSyllabus,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSubjectSyllabusDto,
    description: 'Subject-syllabus relationship data to create',
  })
  create(@Body() createSubjectSyllabusDto: CreateSubjectSyllabusDto) {
    return this.subjectSyllabusService.create(createSubjectSyllabusDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all subject-syllabus relationships',
    description: 'Retrieves a list of all subject-syllabus relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all subject-syllabus relationships',
    type: [SubjectSyllabus],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.subjectSyllabusService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get subject-syllabus relationship by ID',
    description: 'Retrieves a specific subject-syllabus relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved subject-syllabus relationship',
    type: SubjectSyllabus,
  })
  @ApiResponse({ status: 404, description: 'Subject-syllabus relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Subject-syllabus relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.subjectSyllabusService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete subject-syllabus relationship',
    description: 'Deletes a subject-syllabus relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Subject-syllabus relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Subject-syllabus relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Subject-syllabus relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.subjectSyllabusService.remove(id);
  }
}