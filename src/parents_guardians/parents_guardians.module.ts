import { Module } from '@nestjs/common';
import { ParentsGuardiansService } from './parents_guardians.service';
import { ParentsGuardiansController } from './parents_guardians.controller';

@Module({
  controllers: [ParentsGuardiansController],
  providers: [ParentsGuardiansService],
})
export class ParentsGuardiansModule {}
