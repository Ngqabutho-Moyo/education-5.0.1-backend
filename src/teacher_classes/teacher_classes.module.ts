import { Module } from '@nestjs/common';
import { TeacherClassesService } from './teacher_classes.service';
import { TeacherClassesController } from './teacher_classes.controller';

@Module({
  controllers: [TeacherClassesController],
  providers: [TeacherClassesService],
})
export class TeacherClassesModule {}
