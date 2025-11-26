import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SyllabusResourcesService } from './syllabus-resources.service';
import { CreateSyllabusResourceDto } from './dto/create-syllabus-resource.dto';
import { UpdateSyllabusResourceDto } from './dto/update-syllabus-resource.dto';

@Controller('syllabus-resources')
export class SyllabusResourcesController {
  constructor(private readonly syllabusResourcesService: SyllabusResourcesService) {}

  @Post()
  create(@Body() createSyllabusResourceDto: CreateSyllabusResourceDto) {
    return this.syllabusResourcesService.create(createSyllabusResourceDto);
  }

  @Get()
  findAll() {
    return this.syllabusResourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syllabusResourcesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSyllabusResourceDto: UpdateSyllabusResourceDto) {
    return this.syllabusResourcesService.update(+id, updateSyllabusResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syllabusResourcesService.remove(+id);
  }
}
