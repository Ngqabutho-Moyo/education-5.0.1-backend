import { Module } from '@nestjs/common';
import { SyllabusAssignmentsService } from './syllabus_assignments.service';
import { SyllabusAssignmentsController } from './syllabus_assignments.controller';

@Module({
  controllers: [SyllabusAssignmentsController],
  providers: [SyllabusAssignmentsService],
})
export class SyllabusAssignmentsModule {}
