import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresRestHandlerGuard } from './postgresrest.guard';
import { PostgresRestHandlerStrategy } from './postgresrest.strategy';
import { PostgresRest } from './postgresrest.service';

@Module({
  imports: [ConfigModule],
  providers: [
    PostgresRest,
    PostgresRestHandlerStrategy,
    PostgresRestHandlerGuard,
  ],
  exports: [
    PostgresRest,
    PostgresRestHandlerStrategy,
    PostgresRestHandlerGuard,
  ],
})
export class PostgresRestHandlerModule {}
