import { Injectable } from '@nestjs/common';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';

@Injectable()
export class TeacherSubjectsService {
  create(createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return 'This action adds a new teacherSubject';
  }

  findAll() {
    return `This action returns all teacherSubjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherSubject`;
  }

  update(id: number, updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return `This action updates a #${id} teacherSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherSubject`;
  }
}
