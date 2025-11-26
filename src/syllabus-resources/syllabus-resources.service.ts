import { Injectable } from '@nestjs/common';
import { CreateSyllabusResourceDto } from './dto/create-syllabus-resource.dto';
import { UpdateSyllabusResourceDto } from './dto/update-syllabus-resource.dto';

@Injectable()
export class SyllabusResourcesService {
  create(createSyllabusResourceDto: CreateSyllabusResourceDto) {
    return 'This action adds a new syllabusResource';
  }

  findAll() {
    return `This action returns all syllabusResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} syllabusResource`;
  }

  update(id: number, updateSyllabusResourceDto: UpdateSyllabusResourceDto) {
    return `This action updates a #${id} syllabusResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} syllabusResource`;
  }
}
