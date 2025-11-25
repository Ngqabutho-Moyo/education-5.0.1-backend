import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectSyllabusService } from './subject_syllabus.service';
import { CreateSubjectSyllabusDto } from './dto/create-subject_syllabus.dto';
import { UpdateSubjectSyllabusDto } from './dto/update-subject_syllabus.dto';

@Controller('subject-syllabus')
export class SubjectSyllabusController {
  constructor(private readonly subjectSyllabusService: SubjectSyllabusService) {}

  @Post()
  create(@Body() createSubjectSyllabusDto: CreateSubjectSyllabusDto) {
    return this.subjectSyllabusService.create(createSubjectSyllabusDto);
  }

  @Get()
  findAll() {
    return this.subjectSyllabusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectSyllabusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectSyllabusDto: UpdateSubjectSyllabusDto) {
    return this.subjectSyllabusService.update(+id, updateSubjectSyllabusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectSyllabusService.remove(+id);
  }
}
