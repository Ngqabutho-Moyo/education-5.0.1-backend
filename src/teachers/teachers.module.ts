import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { CrudModule } from 'src/common/crud/crud.module';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [CrudModule, PostgresRestHandlerModule, AuthModule],
  controllers: [TeachersController],
  providers: [TeachersService],
  exports: [TeachersService],
})
export class TeachersModule {}