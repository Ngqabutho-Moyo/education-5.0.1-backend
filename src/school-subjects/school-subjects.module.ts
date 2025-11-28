import { Module } from '@nestjs/common';
import { SchoolSubjectsService } from './school-subjects.service';
import { SchoolSubjectsController } from './school-subjects.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SchoolSubjectsController],
  providers: [SchoolSubjectsService],
})
export class SchoolSubjectsModule {}