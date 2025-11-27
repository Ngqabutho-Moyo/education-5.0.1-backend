import { ApiProperty } from '@nestjs/swagger';

export class Department {
  @ApiProperty({
    description: 'Unique identifier for the department',
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
    description: 'Department code',
    example: 'CS',
  })
  code: string;

  @ApiProperty({
    description: 'Name of the department',
    example: 'Computer Science',
  })
  name: string;

  @ApiProperty({
    description: 'Description of the department',
    example: 'Department focused on computer science and programming education',
  })
  description: string;

  @ApiProperty({
    description: 'Phone number of the department',
    example: '+1234567890',
  })
  phone: string;

  @ApiProperty({
    description: 'Email address of the department',
    example: 'csdepartment@school.edu',
  })
  email: string;

  @ApiProperty({
    description: 'Head of Department UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  head_of_department: string;

  @ApiProperty({
    description: 'Array of academic levels offered by the department',
    example: ['Undergraduate', 'Postgraduate', 'PhD'],
    type: [String],
  })
  academic_levels: string[];

  @ApiProperty({
    description: 'School UUID',
    example: '6b99f134-70d6-41af-81bf-fadc7c778e4f',
  })
  school_id: string;
}