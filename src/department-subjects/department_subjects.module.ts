import { Module } from '@nestjs/common';
import { DepartmentSubjectsService } from './department-subjects.service';
import { DepartmentSubjectsController } from './department-subjects.controller';

@Module({
  controllers: [DepartmentSubjectsController],
  providers: [DepartmentSubjectsService],
})
export class DepartmentSubjectsModule {}
