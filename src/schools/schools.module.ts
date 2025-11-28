import { Module } from '@nestjs/common';
import { SchoolService } from './schools.service';
import { SchoolController } from './schools.controller';
import { CrudModule } from 'src/common/crud/crud.module';
import { PostgresRestHandlerModule } from 'src/common/postgresrest/postgresrest.module';
import { TeachersModule } from 'src/teachers/teachers.module';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports: [
    CrudModule,
    PostgresRestHandlerModule,
    TeachersModule,
    StudentsModule,
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolsModule {}
