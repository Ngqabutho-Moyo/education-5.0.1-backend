import { Module } from '@nestjs/common';
import { TeacherSubjectsService } from './teacher_subjects.service';
import { TeacherSubjectsController } from './teacher_subjects.controller';

@Module({
  controllers: [TeacherSubjectsController],
  providers: [TeacherSubjectsService],
})
export class TeacherSubjectsModule {}
