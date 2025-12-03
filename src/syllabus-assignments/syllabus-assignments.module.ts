import { Module } from '@nestjs/common';
import { SyllabusAssignmentsService } from './syllabus-assignments.service';
import { SyllabusAssignmentsController } from './syllabus-assignments.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SyllabusAssignmentsController],
  providers: [SyllabusAssignmentsService],
})
export class SyllabusAssignmentsModule {}