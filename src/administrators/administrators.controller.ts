import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiExcludeEndpoint,
} from '@nestjs/swagger';
import { Administrator } from './entities/administrator.entity';
import { School } from 'src/schools/entities/school.entity';
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';

@ApiTags('Super Administrator')
@Controller('super-administrator')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}
  @ApiExcludeEndpoint()
  @Post()
  @ApiOperation({
    summary: 'Create a new super administrator',
    description: 'Creates a new administrator record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Super administrator successfully created',
    type: Administrator,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateAdministratorDto,
    description: 'Super administrator data to create',
  })
  create(@Body() createAdministratorDto: CreateAdministratorDto) {
    return this.administratorsService.create(createAdministratorDto);
  }

  @Post('school-administrator')
  @ApiOperation({
    summary: 'Create a new school admin (responsible for a school)',
    description: 'Super administrator creates a new school in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'School successfully created',
    type: School,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolDto,
    description: 'School data to create',
  })
  createSchool(@Body() csDto: CreateSchoolDto) {
    return this.administratorsService.createSchool(csDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  @ApiOperation({
    summary: 'Get all administrators',
    description: 'Retrieves a list of all administrators in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all super administrators',
    type: [Administrator],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.administratorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get administrator by ID',
    description:
      'Retrieves a specific administrator by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved super administrator',
    type: Administrator,
  })
  @ApiResponse({ status: 404, description: 'Administrator not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Administrator UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  findOne(@Param('id') id: string) {
    return this.administratorsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update super administrator',
    description: 'Updates an existing super administrator record',
  })
  @ApiResponse({
    status: 200,
    description: 'Super administrator successfully updated',
    type: Administrator,
  })
  @ApiResponse({ status: 404, description: 'Super administrator not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateAdministratorDto,
    description: 'Super administrator data to update',
  })
  update(@Body() updateAdministratorDto: UpdateAdministratorDto) {
    return this.administratorsService.update(updateAdministratorDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete super administrator',
    description: 'Deletes an administrator record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Super administrator successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Administrator not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Super administrator UUID to delete',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  remove(@Param('id') id: string) {
    return this.administratorsService.remove(id);
  }
}
