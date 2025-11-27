import { Injectable } from '@nestjs/common';
import { CreateAdministratorSchoolDto } from './dto/create-administrator-school.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class AdministratorSchoolsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createAdministratorSchoolDto: CreateAdministratorSchoolDto) {
    return await this.crudService.create('administrator_schools', createAdministratorSchoolDto, 'ADMSCH');
  }

  async findAll() {
    return await this.crudService.findAll('administrator_schools');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('administrator_schools', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('administrator_schools', id);
  }
}