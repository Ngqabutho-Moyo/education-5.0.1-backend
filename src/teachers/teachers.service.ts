import { Injectable, Logger } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class TeachersService {
  private readonly logger = new Logger(TeachersService.name);
  
  constructor(
    private readonly crudService: CrudService, 
    private readonly authService: AuthService
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return await this.authService.signup('teacher', createTeacherDto, 'TCH');
    /*
    const authResponse = await this.authService.signup('teacher', createTeacherDto);
    if(authResponse instanceof GeneralErrorResponseDto){
      return authResponse;
    }
    */
  }

  async findAll() {
    return await this.crudService.findAll('teacher');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('teacher', id);
  }

  async update(updateTeacherDto: UpdateTeacherDto) {
    return await this.crudService.update('teacher', updateTeacherDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('teacher', id);
  }
}