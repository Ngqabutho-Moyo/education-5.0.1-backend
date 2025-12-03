import { Injectable } from '@nestjs/common';
import { CreateSyllabusAssignmentDto } from './dto/create-syllabus-assignment.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SyllabusAssignmentsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSyllabusAssignmentDto: CreateSyllabusAssignmentDto) {
    return await this.crudService.create('syllabus_assignments', createSyllabusAssignmentDto, 'SYLASS');
  }

  async findAll() {
    return await this.crudService.findAll('syllabus_assignments');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('syllabus_assignments', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('syllabus_assignments', id);
  }
}