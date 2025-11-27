import { Injectable } from '@nestjs/common';
import { CreateDepartmentTeacherDto } from './dto/create-department-teacher.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class DepartmentTeachersService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createDepartmentTeacherDto: CreateDepartmentTeacherDto) {
    return await this.crudService.create('department_teachers', createDepartmentTeacherDto, 'DEPTTCH');
  }

  async findAll() {
    return await this.crudService.findAll('department_teachers');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('department_teachers', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('department_teachers', id);
  }
}