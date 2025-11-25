import { PartialType } from '@nestjs/swagger';
import { CreateStudentSubjectDto } from './create-student_subject.dto';

export class UpdateStudentSubjectDto extends PartialType(CreateStudentSubjectDto) {}
