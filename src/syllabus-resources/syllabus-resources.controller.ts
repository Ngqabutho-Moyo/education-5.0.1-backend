import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SyllabusResourcesService } from './syllabus-resources.service';
import { CreateSyllabusResourceDto } from './dto/create-syllabus-resource.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { SyllabusResource } from './entities/syllabus-resource.entity';

@ApiTags('SyllabusResources')
@ApiExcludeController()
@Controller('syllabus-resources')
export class SyllabusResourcesController {
  constructor(private readonly syllabusResourcesService: SyllabusResourcesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new syllabus-resource relationship',
    description: 'Creates a new relationship between a syllabus and a resource',
  })
  @ApiResponse({
    status: 201,
    description: 'Syllabus-resource relationship successfully created',
    type: SyllabusResource,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSyllabusResourceDto,
    description: 'Syllabus-resource relationship data to create',
  })
  create(@Body() createSyllabusResourceDto: CreateSyllabusResourceDto) {
    return this.syllabusResourcesService.create(createSyllabusResourceDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all syllabus-resource relationships',
    description: 'Retrieves a list of all syllabus-resource relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all syllabus-resource relationships',
    type: [SyllabusResource],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.syllabusResourcesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get syllabus-resource relationship by ID',
    description: 'Retrieves a specific syllabus-resource relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved syllabus-resource relationship',
    type: SyllabusResource,
  })
  @ApiResponse({ status: 404, description: 'Syllabus-resource relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Syllabus-resource relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.syllabusResourcesService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete syllabus-resource relationship',
    description: 'Deletes a syllabus-resource relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Syllabus-resource relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Syllabus-resource relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Syllabus-resource relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.syllabusResourcesService.remove(id);
  }
}