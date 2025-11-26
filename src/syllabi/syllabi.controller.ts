import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreateSyllabusDto } from './dto/create-syllabus.dto';
import { UpdateSyllabusDto } from './dto/update-syllabus.dto';
import { Syllabus } from './entities/syllabus.entity';
import { SyllabusService } from './syllabi.service';

@ApiTags('Syllabus')
@Controller('syllabus')
export class SyllabusController {
  constructor(private readonly sService: SyllabusService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new course content',
    description: 'Creates a new course content record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Course content successfully created',
    type: Syllabus,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSyllabusDto,
    description: 'Course content data to create',
  })
  create(@Body() createSyllabusDto: CreateSyllabusDto) {
    return this.sService.create(createSyllabusDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all course content',
    description: 'Retrieves a list of all course content in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all course content',
    type: [Syllabus],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.sService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get course content by ID',
    description: 'Retrieves a specific course content by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved course content',
    type: Syllabus,
  })
  @ApiResponse({ status: 404, description: 'Course content not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Course content UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.sService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update course content',
    description: 'Updates an existing course content record',
  })
  @ApiResponse({
    status: 200,
    description: 'Course content successfully updated',
    type: Syllabus,
  })
  @ApiResponse({ status: 404, description: 'Course content not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateSyllabusDto,
    description: 'Course content data to update',
  })
  update(@Body() updateSyllabusDto: UpdateSyllabusDto) {
    return this.sService.update(updateSyllabusDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete course content',
    description: 'Deletes a course content record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Course content successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Course content not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Course content UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.sService.remove(id);
  }
}