import { Module } from '@nestjs/common';
import { SchoolTeachersService } from './school-teachers.service';
import { SchoolTeachersController } from './school-teachers.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SchoolTeachersController],
  providers: [SchoolTeachersService],
})
export class SchoolTeachersModule {}