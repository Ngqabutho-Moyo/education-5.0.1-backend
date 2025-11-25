import { Module } from '@nestjs/common';
import { DepartmentSubjectsService } from './department_subjects.service';
import { DepartmentSubjectsController } from './department_subjects.controller';

@Module({
  controllers: [DepartmentSubjectsController],
  providers: [DepartmentSubjectsService],
})
export class DepartmentSubjectsModule {}
