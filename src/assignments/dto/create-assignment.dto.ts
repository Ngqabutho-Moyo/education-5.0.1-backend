import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, IsDateString, IsNumber } from 'class-validator';

export class CreateAssignmentDto {
  @ApiProperty({
    description: 'Unique identifier for the assignment',
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
    description: 'Syllabus ID UUID',
    example: '72d26287-c8fd-4cc8-a7dc-6770ec39b379',
  })
  @IsUUID()
  @IsOptional()
  syllabus_id?: string;

  @ApiProperty({
    description: 'Assignment code',
    example: 'ASS001',
  })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({
    description: 'Name of the assignment',
    example: 'Programming Fundamentals Project',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Description of the assignment',
    example: 'Create a simple console application demonstrating basic programming concepts',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Publish URL for the assignment',
    example: 'https://example.com/assignments/programming-fundamentals',
  })
  @IsString()
  @IsOptional()
  publish_url?: string;

  @ApiProperty({
    description: 'Submission URL for the assignment',
    example: 'https://example.com/submit/programming-fundamentals',
  })
  @IsString()
  @IsOptional()
  submission_url?: string;

  @ApiProperty({
    description: 'Date when assignment was assigned',
    example: '2024-09-01',
  })
  @IsDateString()
  @IsOptional()
  date_assigned?: string;

  @ApiProperty({
    description: 'Due date for the assignment',
    example: '2024-09-30',
  })
  @IsDateString()
  @IsOptional()
  due_date?: string;

  @ApiProperty({
    description: 'Percentage of coursework this assignment represents',
    example: 25.5,
  })
  @IsNumber()
  @IsOptional()
  percentage_of_coursework?: number;
}