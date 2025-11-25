import { PartialType } from '@nestjs/swagger';
import { CreateStudentClassDto } from './create-student_class.dto';

export class UpdateStudentClassDto extends PartialType(CreateStudentClassDto) {}
