import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsNumber, IsUUID } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty({
    description: 'Unique identifier for the school',
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
    description: 'Admin ID who manages the school',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  @IsUUID()
  @IsOptional()
  admin_id?: string;

  @ApiProperty({
    description: 'Name of the school',
    example: 'Greenwood High School',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Physical address of the school',
    example: '123 Education Street, Learning City, 12345',
  })
  @IsString()
  @IsOptional()
  physical_address?: string;

  @ApiProperty({
    description: 'Phone number of the school',
    example: '+1234567890',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Email address of the school',
    example: 'info@greenwoodhigh.edu',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Number of staff members',
    example: 50,
  })
  @IsNumber()
  @IsOptional()
  staff_size?: number;

  @ApiProperty({
    description: 'Number of students in the school',
    example: 1200,
  })
  @IsNumber()
  @IsOptional()
  student_body_size?: number;
}