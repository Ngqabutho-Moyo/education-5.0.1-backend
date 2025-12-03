import { Injectable } from '@nestjs/common';
import { CreateStudentClassDto } from './dto/create-student-class.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class StudentClassesService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createStudentClassDto: CreateStudentClassDto) {
    return await this.crudService.create('student_classes', createStudentClassDto, 'STUCLS');
  }

  async findAll() {
    return await this.crudService.findAll('student_classes');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('student_classes', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('student_classes', id);
  }
}