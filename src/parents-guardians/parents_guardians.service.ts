import { Injectable, Logger } from '@nestjs/common';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateParentGuardianDto } from './dto/create-parents-guardian.dto';
import { UpdateParentGuardianDto } from './dto/update-parents-guardian.dto';

@Injectable()
export class ParentGuardianService {
  private readonly logger = new Logger(ParentGuardianService.name);
  
  constructor(
    private readonly crudService: CrudService, 
    private readonly authService: AuthService
  ) {}

  async create(createParentGuardianDto: CreateParentGuardianDto) {
    return await this.authService.signup('parent_guardian', createParentGuardianDto, 'PG');
    /*
    const authResponse = await this.authService.signup('parent_guardian', createParentGuardianDto);
    if(authResponse instanceof GeneralErrorResponseDto){
      return authResponse;
    }
    */
  }

  async findAll() {
    return await this.crudService.findAll('parent_guardian');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('parent_guardian', id);
  }

  async update(updateParentGuardianDto: UpdateParentGuardianDto) {
    return await this.crudService.update('parent_guardian', updateParentGuardianDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('parent_guardian', id);
  }
}