import { PartialType } from '@nestjs/swagger';
import { CreateSchoolAdministratorDto } from './create-school-administrator.dto';

export class UpdateSchoolAdministratorDto extends PartialType(CreateSchoolAdministratorDto) {}
