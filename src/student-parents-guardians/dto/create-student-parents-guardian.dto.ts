import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateStudentParentsGuardianDto {
  @ApiProperty({
    description: 'Unique identifier for the student-parent/guardian relationship',
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
    description: 'Parent/Guardian ID UUID',
    example: '79d8cfbe-31ae-4fde-b07d-b0b7ede4b651',
  })
  @IsUUID()
  @IsOptional()
  parent_guardian_id?: string;
}