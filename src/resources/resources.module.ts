import { Module } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { ResourcesController } from './resources.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}