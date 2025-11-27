/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable, Logger } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { CrudService } from 'src/common/crud/crud.service';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { CreateSchoolDepartmentDto } from 'src/school-departments/dto/create-school-department.dto';
import { Department } from 'src/departments/entities/department.entity';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { SchoolDepartment } from 'src/school-departments/entities/school-department.entity';

@Injectable()
export class SchoolService {
  private readonly logger = new Logger(SchoolService.name)
  constructor(private readonly crudService: CrudService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    return await this.crudService.create('schools', createSchoolDto, 'SCH');
  }

  async createDepartment(cdDto: CreateDepartmentDto) {
    // Check if the department already exists
    try {
      const departmentExistsResponse = await this.crudService.findOneByColumn(
        'departments',
        'name',
        cdDto.name!,
      );
      if (departmentExistsResponse instanceof GeneralErrorResponseDto) {
        return departmentExistsResponse;
      }
      if (departmentExistsResponse.data) {
        return new GeneralErrorResponseDto(403, `${cdDto.name} already exists`);
      }
      const deptResponse = await this.crudService.create('departments', cdDto);
      if (deptResponse instanceof GeneralErrorResponseDto) {
        return deptResponse;
      }
      const dept = deptResponse.data as Department;
      const sdDto = new CreateSchoolDepartmentDto();
      sdDto.school_id = cdDto.school_id;
      sdDto.department_id = dept.id;
      sdDto.status = 'created';
      const sdResponse = await this.crudService.create(
        'school_departments',
        sdDto,
      );
      if (sdResponse instanceof GeneralErrorResponseDto) {
        return sdResponse;
      }
      return new SuccessResponseDto(
        201,
        'Department created successfully',
        sdResponse.data as SchoolDepartment,
      );
    } catch (error) {
      this.logger.error('createDepartment error', error);
      return new GeneralErrorResponseDto(500, 'createDepartment error', error);
    }
  }

  async findAll() {
    return await this.crudService.findAll('schools');
  }

  async findOne(id: string) {
    return await this.crudService.findOne('schools', id);
  }

  async update(updateSchoolDto: UpdateSchoolDto) {
    return await this.crudService.update('schools', updateSchoolDto);
  }

  async remove(id: string) {
    return await this.crudService.delete('schools', id);
  }
}
