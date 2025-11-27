import { Module } from '@nestjs/common';
import { AdministratorSchoolsService } from './administrator-schools.service';
import { AdministratorSchoolsController } from './administrator-schools.controller';
import { CrudModule } from 'src/common/crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [AdministratorSchoolsController],
  providers: [AdministratorSchoolsService],
  exports: [AdministratorSchoolsService]
})
export class AdministratorSchoolsModule {}
