import { PartialType } from '@nestjs/swagger';
import { CreateSyllabusResourceDto } from './create-syllabus_resource.dto';

export class UpdateSyllabusResourceDto extends PartialType(CreateSyllabusResourceDto) {}
