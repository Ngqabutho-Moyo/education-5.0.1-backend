import { Module } from '@nestjs/common';
import { StudentClassesService } from './student_classes.service';
import { StudentClassesController } from './student_classes.controller';

@Module({
  controllers: [StudentClassesController],
  providers: [StudentClassesService],
})
export class StudentClassesModule {}
