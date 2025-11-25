import { PartialType } from '@nestjs/swagger';
import { CreateSubjectSyllabusDto } from './create-subject_syllabus.dto';

export class UpdateSubjectSyllabusDto extends PartialType(CreateSubjectSyllabusDto) {}
