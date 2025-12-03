import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SyllabusAssignmentsService } from './syllabus-assignments.service';
import { CreateSyllabusAssignmentDto } from './dto/create-syllabus-assignment.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SyllabusAssignment } from './entities/syllabus-assignment.entity';

@ApiTags('SyllabusAssignments')
@ApiExcludeController()
@Controller('syllabus-assignments')
export class SyllabusAssignmentsController {
  constructor(private readonly syllabusAssignmentsService: SyllabusAssignmentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new syllabus-assignment relationship',
    description: 'Creates a new relationship between a syllabus and an assignment',
  })
  @ApiResponse({
    status: 201,
    description: 'Syllabus-assignment relationship successfully created',
    type: SyllabusAssignment,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSyllabusAssignmentDto,
    description: 'Syllabus-assignment relationship data to create',
  })
  create(@Body() createSyllabusAssignmentDto: CreateSyllabusAssignmentDto) {
    return this.syllabusAssignmentsService.create(createSyllabusAssignmentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all syllabus-assignment relationships',
    description: 'Retrieves a list of all syllabus-assignment relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all syllabus-assignment relationships',
    type: [SyllabusAssignment],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.syllabusAssignmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get syllabus-assignment relationship by ID',
    description: 'Retrieves a specific syllabus-assignment relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved syllabus-assignment relationship',
    type: SyllabusAssignment,
  })
  @ApiResponse({ status: 404, description: 'Syllabus-assignment relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Syllabus-assignment relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.syllabusAssignmentsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete syllabus-assignment relationship',
    description: 'Deletes a syllabus-assignment relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Syllabus-assignment relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Syllabus-assignment relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Syllabus-assignment relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.syllabusAssignmentsService.remove(id);
  }
}