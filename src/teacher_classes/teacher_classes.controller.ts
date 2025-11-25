import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherClassesService } from './teacher_classes.service';
import { CreateTeacherClassDto } from './dto/create-teacher_class.dto';
import { UpdateTeacherClassDto } from './dto/update-teacher_class.dto';

@Controller('teacher-classes')
export class TeacherClassesController {
  constructor(private readonly teacherClassesService: TeacherClassesService) {}

  @Post()
  create(@Body() createTeacherClassDto: CreateTeacherClassDto) {
    return this.teacherClassesService.create(createTeacherClassDto);
  }

  @Get()
  findAll() {
    return this.teacherClassesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherClassesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherClassDto: UpdateTeacherClassDto) {
    return this.teacherClassesService.update(+id, updateTeacherClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherClassesService.remove(+id);
  }
}
