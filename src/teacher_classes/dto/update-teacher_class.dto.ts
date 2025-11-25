import { PartialType } from '@nestjs/swagger';
import { CreateTeacherClassDto } from './create-teacher_class.dto';

export class UpdateTeacherClassDto extends PartialType(CreateTeacherClassDto) {}
