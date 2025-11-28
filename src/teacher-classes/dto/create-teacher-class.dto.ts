import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTeacherClassDto {
  @ApiProperty({
    description: 'Unique identifier for the teacher-class relationship',
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
    description: 'Teacher ID UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  @IsUUID()
  @IsOptional()
  teacher_id?: string;

  @ApiProperty({
    description: 'Class ID UUID',
    example: 'aa49f087-0589-47a7-8399-1fb736c57368',
  })
  @IsUUID()
  @IsOptional()
  class_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  @IsString()
  @IsOptional()
  status?: string;
}