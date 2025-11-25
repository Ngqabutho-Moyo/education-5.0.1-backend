import { Module } from '@nestjs/common';
import { AdministratorSchoolsService } from './administrator_schools.service';
import { AdministratorSchoolsController } from './administrator_schools.controller';

@Module({
  controllers: [AdministratorSchoolsController],
  providers: [AdministratorSchoolsService],
})
export class AdministratorSchoolsModule {}
