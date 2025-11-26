import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsDateString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Unique identifier for the student',
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
    description: 'Student code',
    example: 'STU001',
  })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({
    description: 'First name of the student',
    example: 'Simon',
  })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({
    description: 'Last name of the student',
    example: 'Moyo',
  })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  @IsString()
  @IsOptional()
  profile_picture?: string;

  @ApiProperty({
    description: 'Academic level of the student',
    example: 'Undergraduate',
  })
  @IsString()
  @IsOptional()
  academic_level?: string;

  @ApiProperty({
    description: 'Date when student was enrolled',
    example: '2024-09-01',
  })
  @IsDateString()
  @IsOptional()
  enrolment_date?: string;

  @ApiProperty({
    description: 'Password',
    example: 'usdbkjgiyskskjsd7!@#',
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    description: 'Email address',
    example: 'smoyo@gmail.com',
  })
  @IsEmail()
  @IsOptional()
  email?: string;
}