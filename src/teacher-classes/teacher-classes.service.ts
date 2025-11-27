import { Injectable } from '@nestjs/common';
import { CreateTeacherClassDto } from './dto/create-teacher-class.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class TeacherClassesService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createTeacherClassDto: CreateTeacherClassDto) {
    return await this.crudService.create('teacher_classes', createTeacherClassDto, 'TCHCLS');
  }

  async findAll() {
    return await this.crudService.findAll('teacher_classes');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('teacher_classes', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('teacher_classes', id);
  }
}