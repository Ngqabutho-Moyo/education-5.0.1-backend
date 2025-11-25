import { PartialType } from '@nestjs/swagger';
import { CreateAdministratorSchoolDto } from './create-administrator_school.dto';

export class UpdateAdministratorSchoolDto extends PartialType(CreateAdministratorSchoolDto) {}
