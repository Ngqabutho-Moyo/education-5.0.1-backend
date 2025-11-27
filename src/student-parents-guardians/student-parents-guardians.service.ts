import { Injectable } from '@nestjs/common';
import { CreateStudentParentsGuardianDto } from './dto/create-student-parents-guardian.dto';
import { CrudService } from 'src/common/crud/crud.service';

@Injectable()
export class StudentParentsGuardiansService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createStudentParentsGuardianDto: CreateStudentParentsGuardianDto) {
    return await this.crudService.create('student_parents_guardians', createStudentParentsGuardianDto, 'STUPG');
  }

  async findAll() {
    return await this.crudService.findAll('student_parents_guardians');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('student_parents_guardians', id);
  }

  async remove(id: string) {
    return await this.crudService.delete('student_parents_guardians', id);
  }
}