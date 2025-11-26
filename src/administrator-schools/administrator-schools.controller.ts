import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministratorSchoolsService } from './administrator-schools.service';
import { CreateAdministratorSchoolDto } from './dto/create-administrator-school.dto';
import { UpdateAdministratorSchoolDto } from './dto/update-administrator-school.dto';

@Controller('administrator-schools')
export class AdministratorSchoolsController {
  constructor(private readonly administratorSchoolsService: AdministratorSchoolsService) {}

  @Post()
  create(@Body() createAdministratorSchoolDto: CreateAdministratorSchoolDto) {
    return this.administratorSchoolsService.create(createAdministratorSchoolDto);
  }

  @Get()
  findAll() {
    return this.administratorSchoolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administratorSchoolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministratorSchoolDto: UpdateAdministratorSchoolDto) {
    return this.administratorSchoolsService.update(+id, updateAdministratorSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administratorSchoolsService.remove(+id);
  }
}
