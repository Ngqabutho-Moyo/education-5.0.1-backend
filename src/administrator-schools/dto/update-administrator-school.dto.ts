import { PartialType } from '@nestjs/swagger';
import { CreateAdministratorSchoolDto } from './create-administrator-school.dto';

export class UpdateAdministratorSchoolDto extends PartialType(CreateAdministratorSchoolDto) {}
