import { Injectable } from '@nestjs/common';
import { CreateSyllabusResourceDto } from './dto/create-syllabus-resource.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SyllabusResourcesService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSyllabusResourceDto: CreateSyllabusResourceDto) {
    return await this.crudService.create('syllabus_resources', createSyllabusResourceDto, 'SYLRES');
  }

  async findAll() {
    return await this.crudService.findAll('syllabus_resources');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('syllabus_resources', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('syllabus_resources', id);
  }
}