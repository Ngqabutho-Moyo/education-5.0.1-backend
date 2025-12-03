import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentGuardianService } from './parents-guardians.service';
import { CreateParentGuardianDto } from './dto/create-parents-guardian.dto';
import { UpdateParentGuardianDto } from './dto/update-parents-guardian.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { ParentGuardian } from './entities/parents-guardian.entity';

@ApiTags('Parent/Guardian')
@ApiExcludeController()
@Controller('parent-guardian')
export class ParentGuardianController {
  constructor(private readonly parentGuardiansService: ParentGuardianService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new parent/guardian',
    description: 'Creates a new parent/guardian record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Parent/Guardian successfully created',
    type: ParentGuardian,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateParentGuardianDto,
    description: 'Parent/Guardian data to create',
  })
  create(@Body() createParentGuardianDto: CreateParentGuardianDto) {
    return this.parentGuardiansService.create(createParentGuardianDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all parents/guardians',
    description: 'Retrieves a list of all parents/guardians in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all parents/guardians',
    type: [ParentGuardian],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.parentGuardiansService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get parent/guardian by ID',
    description: 'Retrieves a specific parent/guardian by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved parent/guardian',
    type: ParentGuardian,
  })
  @ApiResponse({ status: 404, description: 'Parent/Guardian not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Parent/Guardian UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.parentGuardiansService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update parent/guardian',
    description: 'Updates an existing parent/guardian record',
  })
  @ApiResponse({
    status: 200,
    description: 'Parent/Guardian successfully updated',
    type: ParentGuardian,
  })
  @ApiResponse({ status: 404, description: 'Parent/Guardian not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateParentGuardianDto,
    description: 'Parent/Guardian data to update',
  })
  update(@Body() updateParentGuardianDto: UpdateParentGuardianDto) {
    return this.parentGuardiansService.update(updateParentGuardianDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete parent/guardian',
    description: 'Deletes a parent/guardian record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Parent/Guardian successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Parent/Guardian not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Parent/Guardian UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.parentGuardiansService.remove(id);
  }
}