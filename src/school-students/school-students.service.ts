import { Injectable } from '@nestjs/common';
import { CreateSchoolStudentDto } from './dto/create-school-student.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SchoolStudentsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSchoolStudentDto: CreateSchoolStudentDto) {
    return await this.crudService.create('school_students', createSchoolStudentDto, 'SCHSTU');
  }

  async findAll() {
    return await this.crudService.findAll('school_students');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('school_students', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('school_students', id);
  }
}