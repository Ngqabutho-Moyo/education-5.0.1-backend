/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiExcludeEndpoint,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { Administrator } from './entities/administrator.entity';
import { AdministratorsService } from './administrators.service';
import { CreateSchoolAdministratorDto } from 'src/school-administrator/dto/create-school-administrator.dto';
import { SchoolAdministrator } from 'src/school-administrator/entities/school-administrator.entity';
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { School } from 'src/schools/entities/school.entity';
import { CreateSchoolAdministratorSchoolDto } from 'src/school-administrator-schools/dto/create-school-administrator-school.dto';
import { SchoolAdministratorSchool } from 'src/school-administrator-schools/entities/school-administrator-school.entity';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@ApiTags('Super Administrator')
@Controller('super-administrator')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new administrator',
    description: 'Creates a new administrator record in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Administrator successfully created',
    type: Administrator,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateAdministratorDto,
    description: 'Administrator data to create',
  })
  create(@Body() createAdministratorDto: CreateAdministratorDto) {
    return this.administratorsService.create(createAdministratorDto);
  }

  @Post('school-administrator')
  @ApiOperation({
    summary: 'Create a new school administrator',
    description: 'Creates a new school administrator record',
  })
  @ApiResponse({
    status: 201,
    description: 'School administrator successfully created',
    type: SchoolAdministrator,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolAdministratorDto,
    description: 'School administrator data to create',
  })
  createSchoolAdministrator(
    @Body() createSchoolAdministratorDto: CreateSchoolAdministratorDto,
  ) {
    return this.administratorsService.createSchoolAdministrator(
      createSchoolAdministratorDto,
    );
  }

  @Post('school')
  @ApiOperation({
    summary: 'Create a new school',
    description: 'Creates a new school record for an administrator',
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
  createSchool(@Body() createSchoolDto: CreateSchoolDto) {
    return this.administratorsService.createSchool(createSchoolDto);
  }

  @Post('assign-school-admin')
  @ApiOperation({
    summary: 'Assign school administrator to a school',
    description: 'Assigns a school administrator to manage a specific school',
  })
  @ApiResponse({
    status: 201,
    description: 'School administrator successfully assigned',
    type: SchoolAdministratorSchool,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: CreateSchoolAdministratorSchoolDto,
    description: 'School administrator assignment data',
  })
  assignSchoolAdmin(
    @Body() createSchoolAdministratorSchoolDto: CreateSchoolAdministratorSchoolDto,
  ) {
    return this.administratorsService.assignSchoolAdmin(
      createSchoolAdministratorSchoolDto,
    );
  }

  @ApiExcludeEndpoint()
  @Get()
  @ApiOperation({
    summary: 'Get all administrators',
    description: 'Retrieves a list of all administrators in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all administrators',
    type: [Administrator],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.administratorsService.findAll();
  }

  @Get('school-administrators/:admin_id')
  @ApiOperation({
    summary: 'Get all school administrators for an admin',
    description: 'Retrieves all school administrators created by a specific administrator',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved school administrators',
    type: [SchoolAdministrator],
  })
  @ApiParam({
    name: 'admin_id',
    type: String,
    description: 'Administrator UUID',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  fetchSchoolAdministratorsForAdmin(@Param('admin_id') admin_id: string) {
    return this.administratorsService.fetchSchoolAdministratorsForAdmin(admin_id);
  }

  @Get('schools/:admin_id')
  @ApiOperation({
    summary: 'Get all schools for an administrator',
    description: 'Retrieves all schools managed by a specific administrator',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved schools',
    type: [School],
  })
  @ApiParam({
    name: 'admin_id',
    type: String,
    description: 'Administrator UUID',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  fetchSchoolsForAdmin(@Param('admin_id') admin_id: string) {
    return this.administratorsService.fetchSchoolsForAdmin(admin_id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('assigned-schools')
  @ApiOperation({
    summary: 'Fetch school and school admin ',
    description: 'Retrieves all schools assigned to the currently logged-in administrator',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved assigned schools',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getAssignedSchools(@Req() req) {
    const loggedInUserId = req.user?.sub;
    if (!loggedInUserId) {
      return {
        status: 'failed',
        message: 'Unauthorized - User ID not found in request',
        statusCode: 401,
      };
    }
    return this.administratorsService.getAssignedSchools(loggedInUserId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get administrator by ID',
    description: 'Retrieves a specific administrator by their unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved administrator',
    type: Administrator,
  })
  @ApiResponse({ status: 404, description: 'Administrator not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Administrator UUID',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  findOne(@Param('id') id: string) {
    return this.administratorsService.findOne(id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update administrator',
    description: 'Updates an existing administrator record',
  })
  @ApiResponse({
    status: 200,
    description: 'Administrator successfully updated',
    type: Administrator,
  })
  @ApiResponse({ status: 404, description: 'Administrator not found' })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({
    type: UpdateAdministratorDto,
    description: 'Administrator data to update',
  })
  update(@Body() updateAdministratorDto: UpdateAdministratorDto) {
    return this.administratorsService.update(updateAdministratorDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete administrator',
    description: 'Deletes an administrator record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Administrator successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Administrator not found' })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Administrator UUID to delete',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  remove(@Param('id') id: string) {
    return this.administratorsService.remove(id);
  }
}