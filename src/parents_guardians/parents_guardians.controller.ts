import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParentsGuardiansService } from './parents_guardians.service';
import { CreateParentsGuardianDto } from './dto/create-parents_guardian.dto';
import { UpdateParentsGuardianDto } from './dto/update-parents_guardian.dto';

@Controller('parents-guardians')
export class ParentsGuardiansController {
  constructor(private readonly parentsGuardiansService: ParentsGuardiansService) {}

  @Post()
  create(@Body() createParentsGuardianDto: CreateParentsGuardianDto) {
    return this.parentsGuardiansService.create(createParentsGuardianDto);
  }

  @Get()
  findAll() {
    return this.parentsGuardiansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentsGuardiansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParentsGuardianDto: UpdateParentsGuardianDto) {
    return this.parentsGuardiansService.update(+id, updateParentsGuardianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentsGuardiansService.remove(+id);
  }
}
