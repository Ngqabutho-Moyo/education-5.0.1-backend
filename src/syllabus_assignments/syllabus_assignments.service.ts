import { Injectable } from '@nestjs/common';
import { CreateSyllabusAssignmentDto } from './dto/create-syllabus_assignment.dto';
import { UpdateSyllabusAssignmentDto } from './dto/update-syllabus_assignment.dto';

@Injectable()
export class SyllabusAssignmentsService {
  create(createSyllabusAssignmentDto: CreateSyllabusAssignmentDto) {
    return 'This action adds a new syllabusAssignment';
  }

  findAll() {
    return `This action returns all syllabusAssignments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} syllabusAssignment`;
  }

  update(id: number, updateSyllabusAssignmentDto: UpdateSyllabusAssignmentDto) {
    return `This action updates a #${id} syllabusAssignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} syllabusAssignment`;
  }
}
