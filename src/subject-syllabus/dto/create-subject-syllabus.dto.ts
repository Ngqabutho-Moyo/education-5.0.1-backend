import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSubjectSyllabusDto {
  @ApiProperty({
    description: 'Unique identifier for the subject-syllabus relationship',
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
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  @IsOptional()
  subject_id?: string;

  @ApiProperty({
    description: 'Syllabus ID UUID',
    example: '72d26287-c8fd-4cc8-a7dc-6770ec39b379',
  })
  @IsUUID()
  @IsOptional()
  syllabus_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Active',
  })
  @IsString()
  @IsOptional()
  status?: string;
}