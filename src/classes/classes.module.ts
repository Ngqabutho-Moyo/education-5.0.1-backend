import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}