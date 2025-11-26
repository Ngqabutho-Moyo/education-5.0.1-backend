import { Injectable, Logger } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AdministratorsService {
  private readonly logger = new Logger(AdministratorsService.name);
  constructor(private readonly crudService: CrudService, private readonly authService: AuthService){}
  async create(createAdministratorDto: CreateAdministratorDto) {
    return await this.authService.signup('administrator', createAdministratorDto, 'ADM');
    /*
    const authResponse = await this.authService.signup('administrator', createAdministratorDto);
    if(authResponse instanceof GeneralErrorResponseDto){
      return authResponse;
    }
    */
  }

  async findAll() {
    return await this.crudService.findAll('administrator');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('administrator', id);
  }

  async update(updateAdministratorDto: UpdateAdministratorDto) {
    return await this.crudService.update('administrator', updateAdministratorDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('administrator', id);
  }
}
