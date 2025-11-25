import { PartialType } from '@nestjs/swagger';
import { CreateSyllabusAssignmentDto } from './create-syllabus_assignment.dto';

export class UpdateSyllabusAssignmentDto extends PartialType(CreateSyllabusAssignmentDto) {}
