import { Injectable } from '@nestjs/common';
import { CreateSchoolTeacherDto } from './dto/create-school-teacher.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SchoolTeachersService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSchoolTeacherDto: CreateSchoolTeacherDto) {
    return await this.crudService.create('school_teachers', createSchoolTeacherDto, 'SCHTCH');
  }

  async findAll() {
    return await this.crudService.findAll('school_teachers');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('school_teachers', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('school_teachers', id);
  }
}