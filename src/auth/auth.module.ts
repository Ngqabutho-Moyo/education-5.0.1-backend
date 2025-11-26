import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { PostgresRest } from 'src/common/postgresrest/postgresrest.service';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { CrudModule } from 'src/common/crud/crud.module';


@Module({
  imports: [
    CrudModule,
    PostgresRestHandlerModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          global: true,
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: 40000 },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [JwtAuthGuard, PostgresRest, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
