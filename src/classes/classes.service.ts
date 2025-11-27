import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class ClassesService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createClassDto: CreateClassDto) {
    return await this.crudService.create('classes', createClassDto, 'CLS');
  }

  async findAll() {
    return await this.crudService.findAll('classes');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('classes', id);
  }

  async update(updateClassDto: UpdateClassDto) {
    return await this.crudService.update('classes', updateClassDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('classes', id);
  }
}