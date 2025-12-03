import { Module } from '@nestjs/common';
import { TeacherSubjectsService } from './teacher-subjects.service';
import { TeacherSubjectsController } from './teacher-subjects.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [TeacherSubjectsController],
  providers: [TeacherSubjectsService],
})
export class TeacherSubjectsModule {}