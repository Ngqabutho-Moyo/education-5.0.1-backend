import { PartialType } from '@nestjs/swagger';
import { CreateSubjectSyllabusDto } from './create-subject-syllabus.dto';

export class UpdateSubjectSyllabusDto extends PartialType(CreateSubjectSyllabusDto) {}
