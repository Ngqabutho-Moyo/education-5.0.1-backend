import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SyllabusAssignmentsService } from './syllabus-assignments.service';
import { CreateSyllabusAssignmentDto } from './dto/create-syllabus-assignment.dto';
import { UpdateSyllabusAssignmentDto } from './dto/update-syllabus-assignment.dto';

@Controller('syllabus-assignments')
export class SyllabusAssignmentsController {
  constructor(private readonly syllabusAssignmentsService: SyllabusAssignmentsService) {}

  @Post()
  create(@Body() createSyllabusAssignmentDto: CreateSyllabusAssignmentDto) {
    return this.syllabusAssignmentsService.create(createSyllabusAssignmentDto);
  }

  @Get()
  findAll() {
    return this.syllabusAssignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syllabusAssignmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSyllabusAssignmentDto: UpdateSyllabusAssignmentDto) {
    return this.syllabusAssignmentsService.update(+id, updateSyllabusAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syllabusAssignmentsService.remove(+id);
  }
}
