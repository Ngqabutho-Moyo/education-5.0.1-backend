import { PartialType } from '@nestjs/swagger';
import { CreateSchoolAdministratorSchoolDto } from './create-school-administrator-school.dto';

export class UpdateSchoolAdministratorSchoolDto extends PartialType(CreateSchoolAdministratorSchoolDto) {}
