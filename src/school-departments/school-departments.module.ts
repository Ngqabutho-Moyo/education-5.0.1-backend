import { Module } from '@nestjs/common';
import { SchoolDepartmentsService } from './school-departments.service';
import { SchoolDepartmentsController } from './school-departments.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SchoolDepartmentsController],
  providers: [SchoolDepartmentsService],
})
export class SchoolDepartmentsModule {}