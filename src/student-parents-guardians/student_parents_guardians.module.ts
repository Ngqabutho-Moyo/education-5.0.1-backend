import { Module } from '@nestjs/common';
import { StudentParentsGuardiansService } from './student-parents-guardians.service';
import { StudentParentsGuardiansController } from './student-parents-guardians.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [StudentParentsGuardiansController],
  providers: [StudentParentsGuardiansService],
})
export class StudentParentsGuardiansModule {}