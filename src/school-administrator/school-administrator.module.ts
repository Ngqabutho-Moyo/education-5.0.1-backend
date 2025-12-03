import { Module } from '@nestjs/common';
import { SchoolAdministratorsService } from './school-administrator.service';
import { SchoolAdministratorsController } from './school-administrator.controller';
import { CrudModule } from 'src/common/crud/crud.module';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { AuthModule } from 'src/auth/auth.module';
import { TeachersModule } from 'src/teachers/teachers.module';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports: [CrudModule, PostgresRestHandlerModule, AuthModule, TeachersModule, StudentsModule,],
  controllers: [SchoolAdministratorsController],
  providers: [SchoolAdministratorsService],
})
export class SchoolAdministratorsModule {}