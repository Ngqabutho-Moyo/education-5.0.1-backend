import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class AssignmentsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createAssignmentDto: CreateAssignmentDto) {
    return await this.crudService.create('assignments', createAssignmentDto, 'ASN');
  }

  async findAll() {
    return await this.crudService.findAll('assignments');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('assignments', id);
  }

  async update(updateAssignmentDto: UpdateAssignmentDto) {
    return await this.crudService.update('assignments', updateAssignmentDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('assignments', id);
  }
}