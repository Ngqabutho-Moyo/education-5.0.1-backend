import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentParentsGuardiansService } from './student-parents-guardians.service';
import { CreateStudentParentsGuardianDto } from './dto/create-student-parents-guardian.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { StudentParentsGuardian } from './entities/student-parents-guardian.entity';

@ApiTags('StudentParentsGuardians')
@ApiExcludeController()
@Controller('student-parents-guardians')
export class StudentParentsGuardiansController {
  constructor(private readonly studentParentsGuardiansService: StudentParentsGuardiansService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new student-parent/guardian relationship',
    description: 'Creates a new relationship between a student and a parent/guardian',
  })
  @ApiResponse({
    status: 201,
    description: 'Student-parent/guardian relationship successfully created',
    type: StudentParentsGuardian,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateStudentParentsGuardianDto,
    description: 'Student-parent/guardian relationship data to create',
  })
  create(@Body() createStudentParentsGuardianDto: CreateStudentParentsGuardianDto) {
    return this.studentParentsGuardiansService.create(createStudentParentsGuardianDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all student-parent/guardian relationships',
    description: 'Retrieves a list of all student-parent/guardian relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all student-parent/guardian relationships',
    type: [StudentParentsGuardian],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.studentParentsGuardiansService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get student-parent/guardian relationship by ID',
    description: 'Retrieves a specific student-parent/guardian relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved student-parent/guardian relationship',
    type: StudentParentsGuardian,
  })
  @ApiResponse({ status: 404, description: 'Student-parent/guardian relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student-parent/guardian relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.studentParentsGuardiansService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete student-parent/guardian relationship',
    description: 'Deletes a student-parent/guardian relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Student-parent/guardian relationship successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Student-parent/guardian relationship not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Student-parent/guardian relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.studentParentsGuardiansService.remove(id);
  }
}