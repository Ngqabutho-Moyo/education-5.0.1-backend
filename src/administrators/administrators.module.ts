import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { CrudModule } from 'src/common/crud/crud.module';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [CrudModule, PostgresRestHandlerModule, AuthModule],
  controllers: [AdministratorsController],
  providers: [AdministratorsService],
})
export class AdministratorsModule {}
