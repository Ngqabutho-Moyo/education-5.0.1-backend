import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class ResourcesService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createResourceDto: CreateResourceDto) {
    return await this.crudService.create('resources', createResourceDto, 'RES');
  }

  async findAll() {
    return await this.crudService.findAll('resources');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('resources', id);
  }

  async update(updateResourceDto: UpdateResourceDto) {
    return await this.crudService.update('resources', updateResourceDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('resources', id);
  }
}