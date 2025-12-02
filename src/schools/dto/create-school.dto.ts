import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNumber,
  IsUUID,
} from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty({
    description: 'Admin ID who manages the school',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  @IsUUID()
  admin_id?: string;

  @ApiProperty({
    description: 'Name of the school',
    example: 'Greenwood High School',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Physical address of the school',
    example: '123 Education Street, Learning City, 12345',
  })
  @IsString()
  physical_address?: string;

  @ApiProperty({
    description: 'Phone number of the school',
    example: '+1234567890',
  })
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Email address of the school',
    example: 'info@greenwoodhigh.edu',
  })
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Number of staff members',
    example: 50,
  })
  @IsNumber()
  staff_size?: number;

  @ApiProperty({
    description: 'Number of students in the school',
    example: 1200,
  })
  @IsNumber()
  student_body_size?: number;
  /*
  @ApiProperty({
    description: 'Managing school admin ID',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  school_admin_id?: string;
  */
}
