import { Module } from '@nestjs/common';
import { SyllabiService } from './syllabi.service';
import { SyllabiController } from './syllabi.controller';

@Module({
  controllers: [SyllabiController],
  providers: [SyllabiService],
})
export class SyllabiModule {}
