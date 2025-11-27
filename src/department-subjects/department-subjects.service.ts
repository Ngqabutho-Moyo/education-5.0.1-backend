import { Injectable } from '@nestjs/common';
import { CreateDepartmentSubjectDto } from './dto/create-department-subject.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class DepartmentSubjectsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createDepartmentSubjectDto: CreateDepartmentSubjectDto) {
    return await this.crudService.create('department_subjects', createDepartmentSubjectDto, 'DEPTSUB');
  }

  async findAll() {
    return await this.crudService.findAll('department_subjects');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('department_subjects', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('department_subjects', id);
  }
}