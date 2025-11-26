import { ApiProperty } from '@nestjs/swagger';

export class Subject {
  @ApiProperty({
    description: 'Unique identifier for the subject',
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
    description: 'Subject code',
    example: 'MATH101',
  })
  code: string;

  @ApiProperty({
    description: 'Name of the subject',
    example: 'Introduction to Mathematics',
  })
  name: string;

  @ApiProperty({
    description: 'Academic level for the subject',
    example: 'Undergraduate',
  })
  academic_level: string;

  @ApiProperty({
    description: 'Department UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  department: string;

  @ApiProperty({
    description: 'Teacher in charge UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  teacher_in_charge: string;

  @ApiProperty({
    description: 'Course content UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  course_content: string;
}