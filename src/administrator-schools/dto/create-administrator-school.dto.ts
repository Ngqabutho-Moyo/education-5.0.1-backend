import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAdministratorSchoolDto {
  @ApiProperty({
    description: 'Unique identifier for the administrator-school relationship',
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
    description: 'Administrator ID UUID',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  @IsUUID()
  @IsOptional()
  admin_id?: string;

  @ApiProperty({
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  @IsUUID()
  @IsOptional()
  school_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  @IsString()
  @IsOptional()
  status?: string;
}