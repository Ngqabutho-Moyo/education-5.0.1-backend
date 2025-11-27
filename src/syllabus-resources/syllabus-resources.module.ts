import { Module } from '@nestjs/common';
import { SyllabusResourcesService } from './syllabus-resources.service';
import { SyllabusResourcesController } from './syllabus-resources.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [SyllabusResourcesController],
  providers: [SyllabusResourcesService],
})
export class SyllabusResourcesModule {}