import { Module } from '@nestjs/common';
import { SyllabusAssignmentsService } from './syllabus-assignments.service';
import { SyllabusAssignmentsController } from './syllabus-assignments.controller';

@Module({
  controllers: [SyllabusAssignmentsController],
  providers: [SyllabusAssignmentsService],
})
export class SyllabusAssignmentsModule {}
