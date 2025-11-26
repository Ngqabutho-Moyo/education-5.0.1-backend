import { Injectable, Logger } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);
  
  constructor(
    private readonly crudService: CrudService, 
    private readonly authService: AuthService
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.authService.signup('student', createStudentDto, 'STU');
    /*
    const authResponse = await this.authService.signup('student', createStudentDto);
    if(authResponse instanceof GeneralErrorResponseDto){
      return authResponse;
    }
    */
  }

  async findAll() {
    return await this.crudService.findAll('student');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('student', id);
  }

  async update(updateStudentDto: UpdateStudentDto) {
    return await this.crudService.update('student', updateStudentDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('student', id);
  }
}