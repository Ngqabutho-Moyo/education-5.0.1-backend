import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/common/crud/crud.service';
import { CreateSyllabusDto } from './dto/create-syllabus.dto';
import { UpdateSyllabusDto } from './dto/update-syllabus.dto';

@Injectable()
export class SyllabusService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createSyllabusDto: CreateSyllabusDto) {
    return await this.crudService.create('syllabi', createSyllabusDto, 'CC');
  }

  async findAll() {
    return await this.crudService.findAll('syllabi');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('syllabi', id);
  }

  async update(updateSyllabusDto: UpdateSyllabusDto) {
    return await this.crudService.update('syllabi', updateSyllabusDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('syllabi', id);
  }
}