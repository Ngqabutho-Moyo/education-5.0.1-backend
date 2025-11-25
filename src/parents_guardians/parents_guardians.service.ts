import { Injectable } from '@nestjs/common';
import { CreateParentsGuardianDto } from './dto/create-parents_guardian.dto';
import { UpdateParentsGuardianDto } from './dto/update-parents_guardian.dto';

@Injectable()
export class ParentsGuardiansService {
  create(createParentsGuardianDto: CreateParentsGuardianDto) {
    return 'This action adds a new parentsGuardian';
  }

  findAll() {
    return `This action returns all parentsGuardians`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parentsGuardian`;
  }

  update(id: number, updateParentsGuardianDto: UpdateParentsGuardianDto) {
    return `This action updates a #${id} parentsGuardian`;
  }

  remove(id: number) {
    return `This action removes a #${id} parentsGuardian`;
  }
}
