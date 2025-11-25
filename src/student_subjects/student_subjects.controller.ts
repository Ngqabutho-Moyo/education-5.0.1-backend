import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentSubjectsService } from './student_subjects.service';
import { CreateStudentSubjectDto } from './dto/create-student_subject.dto';
import { UpdateStudentSubjectDto } from './dto/update-student_subject.dto';

@Controller('student-subjects')
export class StudentSubjectsController {
  constructor(private readonly studentSubjectsService: StudentSubjectsService) {}

  @Post()
  create(@Body() createStudentSubjectDto: CreateStudentSubjectDto) {
    return this.studentSubjectsService.create(createStudentSubjectDto);
  }

  @Get()
  findAll() {
    return this.studentSubjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentSubjectDto: UpdateStudentSubjectDto) {
    return this.studentSubjectsService.update(+id, updateStudentSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentSubjectsService.remove(+id);
  }
}
