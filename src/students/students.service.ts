import { Injectable, Logger } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { AuthService } from 'src/auth/auth.service';
import { PostgresRest } from 'src/common/postgresrest/postgresrest.service';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);

  constructor(
    private readonly crudService: CrudService,
    private readonly authService: AuthService,
    private readonly postgresrest: PostgresRest,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.authService.signup('student', createStudentDto, 'STU');
  }

  async findAll() {
    return await this.crudService.findAll('student');
  }

  async viewClasses(student_id: string) {
    return await this.postgresrest.rpc('student_enrolled_classes', {
      p_student_id: student_id,
    });
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
