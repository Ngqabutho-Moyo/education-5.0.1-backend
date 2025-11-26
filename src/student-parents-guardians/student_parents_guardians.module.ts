import { Module } from '@nestjs/common';
import { StudentParentsGuardiansService } from './student-parents-guardians.service';
import { StudentParentsGuardiansController } from './student-parents-guardians.controller';

@Module({
  controllers: [StudentParentsGuardiansController],
  providers: [StudentParentsGuardiansService],
})
export class StudentParentsGuardiansModule {}
