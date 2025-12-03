import { PartialType } from '@nestjs/swagger';
import { CreateSyllabusAssignmentDto } from './create-syllabus-assignment.dto';

export class UpdateSyllabusAssignmentDto extends PartialType(CreateSyllabusAssignmentDto) {}
