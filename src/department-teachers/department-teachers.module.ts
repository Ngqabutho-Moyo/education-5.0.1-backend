import { Module } from '@nestjs/common';
import { DepartmentTeachersService } from './department-teachers.service';
import { DepartmentTeachersController } from './department-teachers.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [DepartmentTeachersController],
  providers: [DepartmentTeachersService],
})
export class DepartmentTeachersModule {}