import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateStudentClassDto {
  /*
  @ApiProperty({
    description: 'Unique identifier for the student-class relationship',
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
  */

  @ApiProperty({
    description: 'Student ID UUID',
    example: 'c1398c6b-e8d6-437d-a713-f362ddbc63aa',
  })
  @IsUUID()
  @IsOptional()
  student_id?: string;

  @ApiProperty({
    description: 'Class ID UUID',
    example: 'aa49f087-0589-47a7-8399-1fb736c57368',
  })
  @IsUUID()
  @IsOptional()
  class_id?: string;

  @ApiProperty({
    description: 'Teacher ID UUID',
    example: '28b8970e-b6e7-49ec-acb2-fafc59fd50ff',
  })
  @IsUUID()
  teacher_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'enrolled',
  })
  @IsString()
  @IsOptional()
  status?: string;
}