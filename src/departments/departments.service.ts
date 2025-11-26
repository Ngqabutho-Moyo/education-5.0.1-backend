import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class DepartmentsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.crudService.create('departments', createDepartmentDto, 'DEPT');
  }

  async findAll() {
    return await this.crudService.findAll('departments');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('departments', id);
  }

  async update(updateDepartmentDto: UpdateDepartmentDto) {
    return await this.crudService.update('departments', updateDepartmentDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('departments', id);
  }
}