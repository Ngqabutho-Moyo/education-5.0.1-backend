import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Assignment } from './entities/assignment.entity';

@ApiTags('Assignments')
@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new assignment',
    description: 'Creates a new assignment record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Assignment successfully created',
    type: Assignment,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateAssignmentDto,
    description: 'Assignment data to create',
  })
  create(@Body() createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentsService.create(createAssignmentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all assignments',
    description: 'Retrieves a list of all assignments in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all assignments',
    type: [Assignment],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.assignmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get assignment by ID',
    description: 'Retrieves a specific assignment by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved assignment',
    type: Assignment,
  })
  @ApiResponse({ status: 404, description: 'Assignment not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Assignment UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.assignmentsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update assignment',
    description: 'Updates an existing assignment record',
  })
  @ApiResponse({
    status: 200,
    description: 'Assignment successfully updated',
    type: Assignment,
  })
  @ApiResponse({ status: 404, description: 'Assignment not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateAssignmentDto,
    description: 'Assignment data to update',
  })
  update(@Body() updateAssignmentDto: UpdateAssignmentDto) {
    return this.assignmentsService.update(updateAssignmentDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete assignment',
    description: 'Deletes an assignment record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Assignment successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Assignment not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Assignment UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.assignmentsService.remove(id);
  }
}