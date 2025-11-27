import { PartialType } from '@nestjs/swagger';
import { CreateSchoolDepartmentDto } from './create-school-department.dto';

export class UpdateSchoolDepartmentDto extends PartialType(CreateSchoolDepartmentDto) {}
