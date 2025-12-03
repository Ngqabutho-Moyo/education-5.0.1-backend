import { Module } from '@nestjs/common';
import { PostgresRestHandlerModule } from '../postgresrest/postgresrest.module';
import { CrudService } from './crud.service';

@Module({
  imports: [PostgresRestHandlerModule],
  providers: [CrudService],
  exports: [CrudService],
})
export class CrudModule {}
