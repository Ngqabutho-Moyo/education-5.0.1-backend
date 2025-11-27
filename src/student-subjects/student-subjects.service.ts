import { Injectable } from '@nestjs/common';
import { CreateStudentSubjectDto } from './dto/create-student-subject.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class StudentSubjectsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createStudentSubjectDto: CreateStudentSubjectDto) {
    return await this.crudService.create('student_subjects', createStudentSubjectDto, 'STUSUB');
  }

  async findAll() {
    return await this.crudService.findAll('student_subjects');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('student_subjects', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('student_subjects', id);
  }
}