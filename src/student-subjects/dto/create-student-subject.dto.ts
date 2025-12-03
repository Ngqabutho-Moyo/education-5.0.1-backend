import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateStudentSubjectDto {
  @ApiProperty({
    description: 'Unique identifier for the student-subject relationship',
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
    description: 'Student ID UUID',
    example: 'c1398c6b-e8d6-437d-a713-f362ddbc63aa',
  })
  @IsUUID()
  @IsOptional()
  student_id?: string;

  @ApiProperty({
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  @IsOptional()
  subject_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Enrolled',
  })
  @IsString()
  @IsOptional()
  status?: string;
}