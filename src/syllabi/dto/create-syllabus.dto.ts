import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsDateString } from 'class-validator';

export class CreateSyllabusDto {
  /*
  @ApiProperty({
    description: 'Unique identifier for the syllabus',
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
  */

  @ApiProperty({
    description: 'Name of the syllabus',
    example: 'Introduction to Programming Syllabus',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description of the syllabus',
    example: 'Comprehensive syllabus covering programming fundamentals',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Academic level for the syllabus',
    example: 'Undergraduate',
  })
  @IsString()
  academic_level: string;

  @ApiProperty({
    description: 'Publish date of the syllabus',
    example: '2024-01-15',
  })
  @IsDateString()
  publish_date: string;

  @ApiProperty({
    description: 'Completion date of the syllabus',
    example: '2024-12-15',
  })
  @IsDateString()
  completion_date: string;

  @ApiProperty({
    description: 'Status of the syllabus',
    example: 'Published',
  })
  @IsString()
  status: string;

  @ApiProperty({
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  subject_id: string;
}