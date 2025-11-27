import { Module } from '@nestjs/common';
import { TeacherClassesService } from './teacher-classes.service';
import { TeacherClassesController } from './teacher-classes.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [TeacherClassesController],
  providers: [TeacherClassesService],
})
export class TeacherClassesModule {}