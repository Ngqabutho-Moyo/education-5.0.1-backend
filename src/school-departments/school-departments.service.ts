import { Injectable } from '@nestjs/common';
import { CreateSchoolDepartmentDto } from './dto/create-school-department.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SchoolDepartmentsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSchoolDepartmentDto: CreateSchoolDepartmentDto) {
    return await this.crudService.create('school_departments', createSchoolDepartmentDto, 'SCHDEPT');
  }

  async findAll() {
    return await this.crudService.findAll('school_departments');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('school_departments', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('school_departments', id);
  }
}