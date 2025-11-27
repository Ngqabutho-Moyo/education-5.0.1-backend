import { Module } from '@nestjs/common';
import { StudentSubjectsService } from './student-subjects.service';
import { StudentSubjectsController } from './student-subjects.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [StudentSubjectsController],
  providers: [StudentSubjectsService],
})
export class StudentSubjectsModule {}