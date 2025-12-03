import { PartialType } from '@nestjs/swagger';
import { CreateSchoolTeacherDto } from './create-school-teacher.dto';

export class UpdateSchoolTeacherDto extends PartialType(CreateSchoolTeacherDto) {}
