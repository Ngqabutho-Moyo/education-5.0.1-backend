import { PartialType } from '@nestjs/swagger';
import { CreateParentsGuardianDto } from './create-parents_guardian.dto';

export class UpdateParentsGuardianDto extends PartialType(CreateParentsGuardianDto) {}
