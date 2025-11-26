import { Module } from '@nestjs/common';
import { SyllabusResourcesService } from './syllabus-resources.service';
import { SyllabusResourcesController } from './syllabus-resources.controller';

@Module({
  controllers: [SyllabusResourcesController],
  providers: [SyllabusResourcesService],
})
export class SyllabusResourcesModule {}
