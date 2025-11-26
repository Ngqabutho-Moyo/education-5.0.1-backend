import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, IsDateString } from 'class-validator';

export class CreateSyllabusDto {
  @ApiProperty({
    description: 'Unique identifier for the course content',
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
    description: 'Course content code',
    example: 'CC001',
  })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({
    description: 'Name of the course content',
    example: 'Introduction to Programming Syllabus',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Description of the course content',
    example: 'Comprehensive syllabus covering programming fundamentals',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Academic level for the course content',
    example: 'Undergraduate',
  })
  @IsString()
  @IsOptional()
  academic_level?: string;

  @ApiProperty({
    description: 'Publish date of the course content',
    example: '2024-01-15',
  })
  @IsDateString()
  @IsOptional()
  publish_date?: string;

  @ApiProperty({
    description: 'Completion date of the course content',
    example: '2024-12-15',
  })
  @IsDateString()
  @IsOptional()
  completion_date?: string;

  @ApiProperty({
    description: 'Status of the course content',
    example: 'Published',
  })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  @IsOptional()
  subject_id?: string;
}