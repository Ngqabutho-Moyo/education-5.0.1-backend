import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Resource } from './entities/resource.entity';

@ApiTags('Resources')
@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new resource',
    description: 'Creates a new resource record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Resource successfully created',
    type: Resource,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateResourceDto,
    description: 'Resource data to create',
  })
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourcesService.create(createResourceDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all resources',
    description: 'Retrieves a list of all resources in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all resources',
    type: [Resource],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.resourcesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get resource by ID',
    description: 'Retrieves a specific resource by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved resource',
    type: Resource,
  })
  @ApiResponse({ status: 404, description: 'Resource not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Resource UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.resourcesService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update resource',
    description: 'Updates an existing resource record',
  })
  @ApiResponse({
    status: 200,
    description: 'Resource successfully updated',
    type: Resource,
  })
  @ApiResponse({ status: 404, description: 'Resource not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateResourceDto,
    description: 'Resource data to update',
  })
  update(@Body() updateResourceDto: UpdateResourceDto) {
    return this.resourcesService.update(updateResourceDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete resource',
    description: 'Deletes a resource record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Resource successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Resource not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Resource UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.resourcesService.remove(id);
  }
}