/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable, Logger } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateSchoolAdministratorDto } from 'src/school-administrator/dto/create-school-administrator.dto';
import { CreateAdministratorSchoolDto } from 'src/administrator-schools/dto/create-administrator-school.dto';
import { AdministratorSchool } from 'src/administrator-schools/entities/administrator-school.entity';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { School } from 'src/schools/entities/school.entity';
import { CreateSchoolAdministratorSchoolDto } from 'src/school-administrator-schools/dto/create-school-administrator-school.dto';
import { PostgresRest } from 'src/common/postgresrest/postgresrest.service';

@Injectable()
export class AdministratorsService {
  private readonly logger = new Logger(AdministratorsService.name);
  constructor(
    private readonly crudService: CrudService,
    private readonly authService: AuthService,
    private readonly postgresrest: PostgresRest,
  ) {}
  async create(createAdministratorDto: CreateAdministratorDto) {
    return await this.authService.signup(
      'administrator',
      createAdministratorDto,
      'ADM',
    );
  }

  async createSchoolAdministrator(csaDto: CreateSchoolAdministratorDto) {
    return await this.authService.signup(
      'school_administrator',
      csaDto,
      'SCHADM',
    );
  }

  async fetchSchoolAdministratorsForAdmin(admin_id: string) {
    return await this.crudService.findAllByColumn(
      'school_administrator',
      'created_by',
      admin_id,
    );
  }

  async createSchool(createSchoolDto: CreateSchoolDto) {
    // Check if the school already exists
    const schoolExistsResponse = await this.crudService.findOneByColumn(
      'schools',
      'name',
      createSchoolDto.name!,
    );
    if (schoolExistsResponse instanceof GeneralErrorResponseDto) {
      return schoolExistsResponse;
    }
    if (schoolExistsResponse.data) {
      return new GeneralErrorResponseDto(
        403,
        `${createSchoolDto.name} already exists`,
      );
    }
    const createSchoolResponse = await this.crudService.create(
      'schools',
      createSchoolDto,
      'SCH',
    );
    if (createSchoolResponse instanceof GeneralErrorResponseDto) {
      return createSchoolResponse;
    }

    const newSchool = createSchoolResponse.data as School;
    const adminSchoolDto = new CreateAdministratorSchoolDto();
    adminSchoolDto.admin_id = createSchoolDto.admin_id;
    adminSchoolDto.school_id = newSchool.id;
    adminSchoolDto.status = 'created';

    const createAdminSchoolResponse = await this.crudService.create(
      'administrator_schools',
      adminSchoolDto,
    );
    if (createAdminSchoolResponse instanceof GeneralErrorResponseDto) {
      return createAdminSchoolResponse;
    }
    return new SuccessResponseDto(
      201,
      'School created successfully',
      createAdminSchoolResponse.data as AdministratorSchool,
    );
  }

  async fetchSchoolsForAdmin(admin_id: string) {
    return await this.crudService.findAllByColumn(
      'schools',
      'admin_id',
      admin_id,
    );
  }

  async assignSchoolAdmin(csasDto: CreateSchoolAdministratorSchoolDto) {
    return await this.crudService.create(
      'school_administrator_schools',
      csasDto,
    );
  }

  async getAssignedSchools(admin_id: string) {
    try {
      const { data, error } = await this.postgresrest.rpc(
        'get_assigned_schools',
        { p_admin_id: admin_id },
      );
      if (error) {
        this.logger.error('Failed to fetch assigned schools', error);
      }
      return new SuccessResponseDto(
        200,
        'Assigned schools fetched successfully',
        data,
      );
    } catch (e) {
      this.logger.error('getAssignedSchools error', e);
      return new GeneralErrorResponseDto(500, 'getAssignedSchools error', e);
    }
  }

  async findAll() {
    return await this.crudService.findAll('administrator');
  }

  async findAllSchoolsForAdmin(admin_id: string) {
    return await this.crudService.findAllByColumn(
      'schools',
      'admin_id',
      admin_id,
    );
  }

  async findOne(id: string) {
    return await this.crudService.findOne('administrator', id);
  }

  async update(updateAdministratorDto: UpdateAdministratorDto) {
    return await this.crudService.update(
      'administrator',
      updateAdministratorDto,
    );
  }

  async remove(id: string) {
    return await this.crudService.delete('administrator', id);
  }
}
