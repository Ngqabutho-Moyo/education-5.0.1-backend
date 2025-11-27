import { Injectable } from '@nestjs/common';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class TeacherSubjectsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return await this.crudService.create('teacher_subjects', createTeacherSubjectDto, 'TCHSUB');
  }

  async findAll() {
    return await this.crudService.findAll('teacher_subjects');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('teacher_subjects', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('teacher_subjects', id);
  }
}