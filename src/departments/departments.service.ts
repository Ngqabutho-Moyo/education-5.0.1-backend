import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { CreateTeacherSubjectDto } from 'src/teacher-subjects/dto/create-teacher-subject.dto';
import { CreateSubjectSyllabusDto } from 'src/subject-syllabus/dto/create-subject-syllabus.dto';

@Injectable()
export class DepartmentsService {
  constructor(private readonly crudService: CrudService) {}
  
  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.crudService.create('departments', createDepartmentDto, 'DEPT');
  }

  
  async assignTeacherToSubject(tsDto: CreateTeacherSubjectDto){
    return await this.crudService.create('teacher_subjects', tsDto);
  }

  async developCurriculum(ssDto: CreateSubjectSyllabusDto){
    return await this.crudService.create('subject_syllabus', ssDto);
  }

  async findAll() {
    return await this.crudService.findAll('departments');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('departments', id);
  }

  async update(updateDepartmentDto: UpdateDepartmentDto) {
    return await this.crudService.update('departments', updateDepartmentDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('departments', id);
  }
}