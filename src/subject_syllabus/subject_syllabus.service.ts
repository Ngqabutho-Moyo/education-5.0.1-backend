import { Injectable } from '@nestjs/common';
import { CreateSubjectSyllabusDto } from './dto/create-subject_syllabus.dto';
import { UpdateSubjectSyllabusDto } from './dto/update-subject_syllabus.dto';

@Injectable()
export class SubjectSyllabusService {
  create(createSubjectSyllabusDto: CreateSubjectSyllabusDto) {
    return 'This action adds a new subjectSyllabus';
  }

  findAll() {
    return `This action returns all subjectSyllabus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subjectSyllabus`;
  }

  update(id: number, updateSubjectSyllabusDto: UpdateSubjectSyllabusDto) {
    return `This action updates a #${id} subjectSyllabus`;
  }

  remove(id: number) {
    return `This action removes a #${id} subjectSyllabus`;
  }
}
