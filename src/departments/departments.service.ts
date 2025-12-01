/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable, Logger } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { CreateTeacherSubjectDto } from 'src/teacher-subjects/dto/create-teacher-subject.dto';
import { CreateSubjectSyllabusDto } from 'src/subject-syllabus/dto/create-subject-syllabus.dto';
import { CreateSyllabusDto } from 'src/syllabi/dto/create-syllabus.dto';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { Syllabus } from 'src/syllabi/entities/syllabus.entity';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';

@Injectable()
export class DepartmentsService {
  private readonly logger = new Logger(DepartmentsService.name);
  constructor(private readonly crudService: CrudService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.crudService.create(
      'departments',
      createDepartmentDto,
      'DEPT',
    );
  }

  async assignTeacherToSubject(tsDto: CreateTeacherSubjectDto) {
    return await this.crudService.create('teacher_subjects', tsDto);
  }

  async fetchTeacherSubjects(department_id){
    return await this.crudService.findAllByColumn('subjects', 'department_id', department_id)
  }

  async createSyllabus(syllabusDto: CreateSyllabusDto) {
    try {
      // Check if the syllabus exists
      const syllabusExistsResponse = await this.crudService.findOneByColumn(
        'syllabi',
        'name',
        syllabusDto.name,
      );
      if (syllabusExistsResponse instanceof GeneralErrorResponseDto) {
        return syllabusExistsResponse;
      }
      if (syllabusExistsResponse.data) {
        return new GeneralErrorResponseDto(
          403,
          `${syllabusDto.name} already exists`,
        );
      }

      // Create the syllabus
      const syllabusResponse = await this.crudService.create(
        'syllabi',
        syllabusDto,
        'SYL',
      );
      if (syllabusResponse instanceof GeneralErrorResponseDto) {
        return syllabusResponse;
      }
      const syllabus = syllabusResponse.data as Syllabus;

      // Create subject-syllabus relationship
      const ssDto = new CreateSubjectSyllabusDto();
      ssDto.subject_id = syllabusDto.subject_id;
      ssDto.syllabus_id = syllabus.id;
      ssDto.status = 'active';
      const subjectSyllabusResponse = await this.crudService.create(
        'subject_syllabus',
        ssDto,
      );
      if (subjectSyllabusResponse instanceof GeneralErrorResponseDto) {
        return subjectSyllabusResponse;
      }

      // Update subjects table with syllabus ID
      const updateDto = { id: ssDto.subject_id, syllabus: ssDto.syllabus_id };
      const updateSubjectResponse = await this.crudService.update(
        'subjects',
        updateDto,
      );
      if (updateSubjectResponse instanceof GeneralErrorResponseDto) {
        return updateSubjectResponse;
      }

      return new SuccessResponseDto(
        201,
        'Syllabus created successfully',
        syllabus,
      );
    } catch (e) {
      this.logger.error('createSyllabus error', e);
      return new GeneralErrorResponseDto(500, 'createSyllabus error', e);
    }
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
