import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdministratorSchoolsService } from './administrator-schools.service';
import { CreateAdministratorSchoolDto } from './dto/create-administrator-school.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeController,
} from '@nestjs/swagger';
import { AdministratorSchool } from './entities/administrator-school.entity';

@ApiExcludeController()
@ApiTags('AdministratorSchools')
@Controller('administrator-schools')
export class AdministratorSchoolsController {
  constructor(
    private readonly administratorSchoolsService: AdministratorSchoolsService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new administrator-school relationship',
    description:
      'Creates a new relationship between an administrator and a school',
  })
  @ApiResponse({
    status: 201,
    description: 'Administrator-school relationship successfully created',
    type: AdministratorSchool,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateAdministratorSchoolDto,
    description: 'Administrator-school relationship data to create',
  })
  create(@Body() createAdministratorSchoolDto: CreateAdministratorSchoolDto) {
    return this.administratorSchoolsService.create(
      createAdministratorSchoolDto,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Get all administrator-school relationships',
    description:
      'Retrieves a list of all administrator-school relationships in the system',
  })
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved all administrator-school relationships',
    type: [AdministratorSchool],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.administratorSchoolsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get administrator-school relationship by ID',
    description:
      'Retrieves a specific administrator-school relationship by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved administrator-school relationship',
    type: AdministratorSchool,
  })
  @ApiResponse({
    status: 404,
    description: 'Administrator-school relationship not found',
  })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Administrator-school relationship UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.administratorSchoolsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete administrator-school relationship',
    description:
      'Deletes an administrator-school relationship record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Administrator-school relationship successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Administrator-school relationship not found',
  })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Administrator-school relationship UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.administratorSchoolsService.remove(id);
  }
}
