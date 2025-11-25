import { Module } from '@nestjs/common';
import { SubjectSyllabusService } from './subject_syllabus.service';
import { SubjectSyllabusController } from './subject_syllabus.controller';

@Module({
  controllers: [SubjectSyllabusController],
  providers: [SubjectSyllabusService],
})
export class SubjectSyllabusModule {}
