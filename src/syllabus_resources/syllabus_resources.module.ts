import { Module } from '@nestjs/common';
import { SyllabusResourcesService } from './syllabus_resources.service';
import { SyllabusResourcesController } from './syllabus_resources.controller';

@Module({
  controllers: [SyllabusResourcesController],
  providers: [SyllabusResourcesService],
})
export class SyllabusResourcesModule {}
