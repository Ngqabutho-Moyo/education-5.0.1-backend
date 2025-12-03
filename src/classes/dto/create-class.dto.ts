import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({
    description: 'Unique identifier for the class',
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
    description: 'Teacher in charge UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  @IsUUID()
  @IsOptional()
  teacher_in_charge?: string;

  @ApiProperty({
    description: 'Academic level for the class',
    example: 'Grade 10',
  })
  @IsString()
  @IsOptional()
  academic_level?: string;

  @ApiProperty({
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  @IsOptional()
  subject_id?: string;

  @ApiProperty({
    description: 'Status',
    example: 'In session',
  })
  @IsUUID()
  @IsOptional()
  status?: string;
}