import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSubjectDto {
  /*
  @ApiProperty({
    description: 'Unique identifier for the subject',
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
    description: 'Subject code',
    example: 'MATH101',
  })
  @IsString()
  @IsOptional()
  code?: string;
  */

  @ApiProperty({
    description: 'Name of the subject',
    example: 'Introduction to Mathematics',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Academic level for the subject',
    example: 'Undergraduate',
  })
  @IsString()
  @IsOptional()
  academic_level?: string;
  /*
  @ApiProperty({
    description: 'Department UUID',
    example: '0b9df507-944e-4222-ba3a-afa329d13840',
  })
  @IsUUID()
  @IsOptional()
  department?: string;

  @ApiProperty({
    description: 'Teacher in charge UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  @IsUUID()
  @IsOptional()
  teacher_in_charge?: string;

  @ApiProperty({
    description: 'Course content UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  @IsOptional()
  course_content?: string;
  */

  @ApiProperty({
    description: 'School UUID',
    example: 'fc4c0906-306d-4f6f-ade2-c51aff7751f0',
  })
  @IsUUID()
  @IsOptional()
  school_id?: string;
}