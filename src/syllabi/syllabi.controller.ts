import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SyllabiService } from './syllabi.service';
import { CreateSyllabusDto } from './dto/create-syllabus.dto';
import { UpdateSyllabusDto } from './dto/update-syllabus.dto';

@Controller('syllabi')
export class SyllabiController {
  constructor(private readonly syllabiService: SyllabiService) {}

  @Post()
  create(@Body() createSyllabusDto: CreateSyllabusDto) {
    return this.syllabiService.create(createSyllabusDto);
  }

  @Get()
  findAll() {
    return this.syllabiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syllabiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSyllabusDto: UpdateSyllabusDto) {
    return this.syllabiService.update(+id, updateSyllabusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syllabiService.remove(+id);
  }
}
