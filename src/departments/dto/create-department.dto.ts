import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsArray, } from 'class-validator';

export class CreateDepartmentDto {
  /*
  @ApiProperty({
    description: 'Unique identifier for the department',
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
    description: 'Department code',
    example: 'CS',
  })
  @IsString()
  @IsOptional()
  code?: string;
  */
  @ApiProperty({
    description: 'Name of the department',
    example: 'Computer Science',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description of the department',
    example: 'Department focused on computer science and programming education',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Phone number of the department',
    example: '+1234567890',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Email address of the department',
    example: 'csdepartment@school.edu',
  })
  @IsEmail()
  @IsOptional()
  email?: string;
  /*
  @ApiProperty({
    description: 'Head of Department (teacher ID)',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  @IsUUID()
  @IsOptional()
  head_of_department?: string;
  */

  @ApiProperty({
    description: 'Array of academic levels offered by the department',
    example: ['Undergraduate', 'Postgraduate', 'PhD'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  academic_levels?: string[];

  @ApiProperty({
    description: 'School UUID',
    example: '6b99f134-70d6-41af-81bf-fadc7c778e4f',
  })
  school_id: string;
}