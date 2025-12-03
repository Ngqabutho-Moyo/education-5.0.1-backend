import { Module } from '@nestjs/common';
import { CrudModule } from 'src/common/crud/crud.module';
import { SyllabusService } from './syllabi.service';
import { SyllabusController } from './syllabi.controller';

@Module({
  imports: [CrudModule],
  controllers: [SyllabusController],
  providers: [SyllabusService],
})
export class SyllabusModule {}