import { PartialType } from '@nestjs/swagger';
import { CreateStudentParentsGuardianDto } from './create-student-parents-guardian.dto';

export class UpdateStudentParentsGuardianDto extends PartialType(CreateStudentParentsGuardianDto) {}
