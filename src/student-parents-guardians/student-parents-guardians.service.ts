import { Injectable } from '@nestjs/common';
import { CreateStudentParentsGuardianDto } from './dto/create-student-parents-guardian.dto';
import { UpdateStudentParentsGuardianDto } from './dto/update-student-parents-guardian.dto';

@Injectable()
export class StudentParentsGuardiansService {
  create(createStudentParentsGuardianDto: CreateStudentParentsGuardianDto) {
    return 'This action adds a new studentParentsGuardian';
  }

  findAll() {
    return `This action returns all studentParentsGuardians`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentParentsGuardian`;
  }

  update(id: number, updateStudentParentsGuardianDto: UpdateStudentParentsGuardianDto) {
    return `This action updates a #${id} studentParentsGuardian`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentParentsGuardian`;
  }
}
