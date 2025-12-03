import { PartialType } from '@nestjs/swagger';
import { CreateSyllabusResourceDto } from './create-syllabus-resource.dto';

export class UpdateSyllabusResourceDto extends PartialType(CreateSyllabusResourceDto) {}
