import { Injectable } from '@nestjs/common';
import { CreateSubjectSyllabusDto } from './dto/create-subject-syllabus.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SubjectSyllabusService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSubjectSyllabusDto: CreateSubjectSyllabusDto) {
    return await this.crudService.create('subject_syllabus', createSubjectSyllabusDto, 'SUBSYL');
  }

  async findAll() {
    return await this.crudService.findAll('subject_syllabus');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('subject_syllabus', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('subject_syllabus', id);
  }
}