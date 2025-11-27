import { Module } from '@nestjs/common';
import { DepartmentSubjectsService } from './department-subjects.service';
import { DepartmentSubjectsController } from './department-subjects.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [DepartmentSubjectsController],
  providers: [DepartmentSubjectsService],
})
export class DepartmentSubjectsModule {}