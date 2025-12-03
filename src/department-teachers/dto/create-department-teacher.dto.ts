import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDepartmentTeacherDto {
  @ApiProperty({
    description: 'Unique identifier for the department-teacher relationship',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Timestamp of creation',
    example: '2025-08-21 12:58:15.357772+00',
  })
  @IsString()
  @IsOptional()
  created_at?: string;

  @ApiProperty({
    description: 'Timestamp of last update',
    example: '2025-08-21 12:58:15.357772+00',
  })
  @IsString()
  @IsOptional()
  updated_at?: string;

  @ApiProperty({
    description: 'Department ID UUID',
    example: '0b9df507-944e-4222-ba3a-afa329d13840',
  })
  @IsUUID()
  @IsOptional()
  department_id?: string;

  @ApiProperty({
    description: 'Teacher ID UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  @IsUUID()
  @IsOptional()
  teacher_id?: string;
}