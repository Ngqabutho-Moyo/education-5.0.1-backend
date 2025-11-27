import { Module } from '@nestjs/common';
import { SubjectSyllabusService } from './subject-syllabus.service';
import { SubjectSyllabusController } from './subject-syllabus.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SubjectSyllabusController],
  providers: [SubjectSyllabusService],
})
export class SubjectSyllabusModule {}