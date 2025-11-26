import { Module } from '@nestjs/common';
import { AdministratorSchoolsService } from './administrator-schools.service';
import { AdministratorSchoolsController } from './administrator-schools.controller';

@Module({
  controllers: [AdministratorSchoolsController],
  providers: [AdministratorSchoolsService],
})
export class AdministratorSchoolsModule {}
