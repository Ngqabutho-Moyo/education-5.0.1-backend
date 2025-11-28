import { Module } from '@nestjs/common';
import { SchoolStudentsService } from './school-students.service';
import { SchoolStudentsController } from './school-students.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SchoolStudentsController],
  providers: [SchoolStudentsService],
})
export class SchoolStudentsModule {}