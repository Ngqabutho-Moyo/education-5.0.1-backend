import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Class } from './entities/class.entity';

@ApiTags('Classes')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new class',
    description: 'Creates a new class record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Class successfully created',
    type: Class,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateClassDto,
    description: 'Class data to create',
  })
  create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all classes',
    description: 'Retrieves a list of all classes in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all classes',
    type: [Class],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.classesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get class by ID',
    description: 'Retrieves a specific class by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved class',
    type: Class,
  })
  @ApiResponse({ status: 404, description: 'Class not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Class UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update class',
    description: 'Updates an existing class record',
  })
  @ApiResponse({
    status: 200,
    description: 'Class successfully updated',
    type: Class,
  })
  @ApiResponse({ status: 404, description: 'Class not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateClassDto,
    description: 'Class data to update',
  })
  update(@Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(updateClassDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete class',
    description: 'Deletes a class record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Class successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Class not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Class UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.classesService.remove(id);
  }
}