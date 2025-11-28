import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { CrudModule } from 'src/common/crud/crud.module';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [CrudModule, PostgresRestHandlerModule, AuthModule],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService]
})
export class StudentsModule {}