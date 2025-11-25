import { Module } from '@nestjs/common';
import { StudentParentsGuardiansService } from './student_parents_guardians.service';
import { StudentParentsGuardiansController } from './student_parents_guardians.controller';

@Module({
  controllers: [StudentParentsGuardiansController],
  providers: [StudentParentsGuardiansService],
})
export class StudentParentsGuardiansModule {}
