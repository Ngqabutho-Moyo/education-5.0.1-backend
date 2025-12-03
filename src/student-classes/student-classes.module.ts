import { Module } from '@nestjs/common';
import { StudentClassesService } from './student-classes.service';
import { StudentClassesController } from './student-classes.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [StudentClassesController],
  providers: [StudentClassesService],
})
export class StudentClassesModule {}