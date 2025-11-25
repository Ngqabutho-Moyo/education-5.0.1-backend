import { Injectable } from '@nestjs/common';
import { CreateAdministratorSchoolDto } from './dto/create-administrator_school.dto';
import { UpdateAdministratorSchoolDto } from './dto/update-administrator_school.dto';

@Injectable()
export class AdministratorSchoolsService {
  create(createAdministratorSchoolDto: CreateAdministratorSchoolDto) {
    return 'This action adds a new administratorSchool';
  }

  findAll() {
    return `This action returns all administratorSchools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administratorSchool`;
  }

  update(id: number, updateAdministratorSchoolDto: UpdateAdministratorSchoolDto) {
    return `This action updates a #${id} administratorSchool`;
  }

  remove(id: number) {
    return `This action removes a #${id} administratorSchool`;
  }
}
