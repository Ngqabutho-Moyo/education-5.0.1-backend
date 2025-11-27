import { Injectable, Logger } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { CreateAdministratorSchoolDto } from 'src/administrator-schools/dto/create-administrator-school.dto';
import { School } from 'src/schools/entities/school.entity';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { AdministratorSchool } from 'src/administrator-schools/entities/administrator-school.entity';

@Injectable()
export class AdministratorsService {
  private readonly logger = new Logger(AdministratorsService.name);
  constructor(
    private readonly crudService: CrudService,
    private readonly authService: AuthService,
  ) {}
  async create(createAdministratorDto: CreateAdministratorDto) {
    return await this.authService.signup(
      'administrator',
      createAdministratorDto,
      'ADM',
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

  async findAll() {
    return await this.crudService.findAll('administrator');
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
