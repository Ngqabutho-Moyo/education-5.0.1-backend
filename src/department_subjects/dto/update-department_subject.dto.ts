import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentSubjectDto } from './create-department_subject.dto';

export class UpdateDepartmentSubjectDto extends PartialType(CreateDepartmentSubjectDto) {}
