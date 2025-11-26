import { PartialType } from '@nestjs/swagger';
import { CreateParentGuardianDto } from './create-parents-guardian.dto';

export class UpdateParentGuardianDto extends PartialType(CreateParentGuardianDto) {}
