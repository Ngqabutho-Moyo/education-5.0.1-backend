import { ApiProperty } from '@nestjs/swagger';

export class School {
  @ApiProperty({
    description: 'Unique identifier for the school',
    example: 'abbc1234-5678-90ab-cdef-1234567890ab',
  })
  id: string;

  @ApiProperty({
    description: 'Timestamp of creation',
    example: '2025-08-21 12:58:15.357772+00',
  })
  created_at: string;

  @ApiProperty({
    description: 'Timestamp of last update',
    example: '2025-08-21 12:58:15.357772+00',
  })
  updated_at: string;

  @ApiProperty({
    description: 'Admin ID who manages the school',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  admin_id: string;

  @ApiProperty({
    description: 'Name of the school',
    example: 'Greenwood High School',
  })
  name: string;

  @ApiProperty({
    description: 'Physical address of the school',
    example: '123 Education Street, Learning City, 12345',
  })
  physical_address: string;

  @ApiProperty({
    description: 'Phone number of the school',
    example: '+1234567890',
  })
  phone: string;

  @ApiProperty({
    description: 'Email address of the school',
    example: 'info@greenwoodhigh.edu',
  })
  email: string;

  @ApiProperty({
    description: 'Number of staff members',
    example: 50,
  })
  staff_size: number;

  @ApiProperty({
    description: 'Number of students in the school',
    example: 1200,
  })
  student_body_size: number;
}