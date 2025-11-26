import { Module } from '@nestjs/common';
import { CrudModule } from 'src/common/crud/crud.module';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { AuthModule } from 'src/auth/auth.module';
import { ParentGuardianController } from './parents-guardians.controller';
import { ParentGuardianService } from './parents_guardians.service';

@Module({
  imports: [CrudModule, PostgresRestHandlerModule, AuthModule],
  controllers: [ParentGuardianController],
  providers: [ParentGuardianService],
})
export class ParentGuardianModule {}