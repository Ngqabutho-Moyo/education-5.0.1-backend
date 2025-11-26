import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentSubjectsService } from './department-subjects.service';
import { CreateDepartmentSubjectDto } from './dto/create-department-subject.dto';
import { UpdateDepartmentSubjectDto } from './dto/update-department-subject.dto';

@Controller('department-subjects')
export class DepartmentSubjectsController {
  constructor(private readonly departmentSubjectsService: DepartmentSubjectsService) {}

  @Post()
  create(@Body() createDepartmentSubjectDto: CreateDepartmentSubjectDto) {
    return this.departmentSubjectsService.create(createDepartmentSubjectDto);
  }

  @Get()
  findAll() {
    return this.departmentSubjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentSubjectDto: UpdateDepartmentSubjectDto) {
    return this.departmentSubjectsService.update(+id, updateDepartmentSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentSubjectsService.remove(+id);
  }
}
