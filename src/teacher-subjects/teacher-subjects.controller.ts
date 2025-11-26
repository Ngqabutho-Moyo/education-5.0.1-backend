import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherSubjectsService } from './teacher-subjects.service';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';

@Controller('teacher-subjects')
export class TeacherSubjectsController {
  constructor(private readonly teacherSubjectsService: TeacherSubjectsService) {}

  @Post()
  create(@Body() createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.teacherSubjectsService.create(createTeacherSubjectDto);
  }

  @Get()
  findAll() {
    return this.teacherSubjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return this.teacherSubjectsService.update(+id, updateTeacherSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherSubjectsService.remove(+id);
  }
}
