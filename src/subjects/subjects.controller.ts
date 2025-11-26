import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Subject } from './entities/subject.entity';

@ApiTags('Subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new subject',
    description: 'Creates a new subject record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Subject successfully created',
    type: Subject,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSubjectDto,
    description: 'Subject data to create',
  })
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all subjects',
    description: 'Retrieves a list of all subjects in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all subjects',
    type: [Subject],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get subject by ID',
    description: 'Retrieves a specific subject by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved subject',
    type: Subject,
  })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Subject UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update subject',
    description: 'Updates an existing subject record',
  })
  @ApiResponse({
    status: 200,
    description: 'Subject successfully updated',
    type: Subject,
  })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateSubjectDto,
    description: 'Subject data to update',
  })
  update(@Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(updateSubjectDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete subject',
    description: 'Deletes a subject record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Subject successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Subject UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(id);
  }
}