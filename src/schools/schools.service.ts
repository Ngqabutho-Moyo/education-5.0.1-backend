import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class SchoolService {
  constructor(private readonly crudService: CrudService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    return await this.crudService.create('schools', createSchoolDto, 'SCH');
  }

  async findAll() {
    return await this.crudService.findAll('schools');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('schools', id);
  }

  async update(updateSchoolDto: UpdateSchoolDto) {
    return await this.crudService.update('schools', updateSchoolDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('schools', id);
  }
}
