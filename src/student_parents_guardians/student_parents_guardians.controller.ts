import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentParentsGuardiansService } from './student_parents_guardians.service';
import { CreateStudentParentsGuardianDto } from './dto/create-student_parents_guardian.dto';
import { UpdateStudentParentsGuardianDto } from './dto/update-student_parents_guardian.dto';

@Controller('student-parents-guardians')
export class StudentParentsGuardiansController {
  constructor(private readonly studentParentsGuardiansService: StudentParentsGuardiansService) {}

  @Post()
  create(@Body() createStudentParentsGuardianDto: CreateStudentParentsGuardianDto) {
    return this.studentParentsGuardiansService.create(createStudentParentsGuardianDto);
  }

  @Get()
  findAll() {
    return this.studentParentsGuardiansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentParentsGuardiansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentParentsGuardianDto: UpdateStudentParentsGuardianDto) {
    return this.studentParentsGuardiansService.update(+id, updateStudentParentsGuardianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentParentsGuardiansService.remove(+id);
  }
}
