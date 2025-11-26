import { Module } from '@nestjs/common';
import { StudentSubjectsService } from './student-subjects.service';
import { StudentSubjectsController } from './student-subjects.controller';

@Module({
  controllers: [StudentSubjectsController],
  providers: [StudentSubjectsService],
})
export class StudentSubjectsModule {}
