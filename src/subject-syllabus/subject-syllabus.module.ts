import { Module } from '@nestjs/common';
import { SubjectSyllabusService } from './subject-syllabus.service';
import { SubjectSyllabusController } from './subject-syllabus.controller';

@Module({
  controllers: [SubjectSyllabusController],
  providers: [SubjectSyllabusService],
})
export class SubjectSyllabusModule {}
