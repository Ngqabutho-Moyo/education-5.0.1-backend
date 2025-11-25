import { PartialType } from '@nestjs/swagger';
import { CreateStudentParentsGuardianDto } from './create-student_parents_guardian.dto';

export class UpdateStudentParentsGuardianDto extends PartialType(CreateStudentParentsGuardianDto) {}
