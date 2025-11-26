import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SubjectsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSubjectDto: CreateSubjectDto) {
    return await this.crudService.create('subjects', createSubjectDto, 'SUB');
  }

  async findAll() {
    return await this.crudService.findAll('subjects');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('subjects', id);
  }

  async update(updateSubjectDto: UpdateSubjectDto) {
    return await this.crudService.update('subjects', updateSubjectDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('subjects', id);
  }
}