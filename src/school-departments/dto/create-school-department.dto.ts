import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSchoolDepartmentDto {
  @ApiProperty({
    description: 'Unique identifier for the school-department relationship',
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
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  @IsUUID()
  @IsOptional()
  school_id?: string;

  @ApiProperty({
    description: 'Department ID UUID',
    example: '0b9df507-944e-4222-ba3a-afa329d13840',
  })
  @IsUUID()
  @IsOptional()
  department_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Active',
  })
  @IsString()
  @IsOptional()
  status?: string;
}