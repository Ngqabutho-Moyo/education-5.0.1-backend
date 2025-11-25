import { Module } from '@nestjs/common';
import { StudentSubjectsService } from './student_subjects.service';
import { StudentSubjectsController } from './student_subjects.controller';

@Module({
  controllers: [StudentSubjectsController],
  providers: [StudentSubjectsService],
})
export class StudentSubjectsModule {}
