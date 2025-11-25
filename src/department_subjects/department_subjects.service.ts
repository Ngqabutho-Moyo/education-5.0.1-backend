import { Injectable } from '@nestjs/common';
import { CreateDepartmentSubjectDto } from './dto/create-department_subject.dto';
import { UpdateDepartmentSubjectDto } from './dto/update-department_subject.dto';

@Injectable()
export class DepartmentSubjectsService {
  create(createDepartmentSubjectDto: CreateDepartmentSubjectDto) {
    return 'This action adds a new departmentSubject';
  }

  findAll() {
    return `This action returns all departmentSubjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentSubject`;
  }

  update(id: number, updateDepartmentSubjectDto: UpdateDepartmentSubjectDto) {
    return `This action updates a #${id} departmentSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentSubject`;
  }
}
