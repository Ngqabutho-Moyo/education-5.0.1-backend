import { Injectable } from '@nestjs/common';
import { CreateSchoolSubjectDto } from './dto/create-school-subject.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SchoolSubjectsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSchoolSubjectDto: CreateSchoolSubjectDto) {
    return await this.crudService.create('school_subjects', createSchoolSubjectDto, 'SCHSUB');
  }

  async findAll() {
    return await this.crudService.findAll('school_subjects');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('school_subjects', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('school_subjects', id);
  }
}