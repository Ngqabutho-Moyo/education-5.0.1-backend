import { ApiProperty } from '@nestjs/swagger';

export class Syllabus {
  @ApiProperty({
    description: 'Unique identifier for the course content',
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
    description: 'Course content code',
    example: 'CC001',
  })
  code: string;

  @ApiProperty({
    description: 'Name of the course content',
    example: 'Introduction to Programming Syllabus',
  })
  name: string;

  @ApiProperty({
    description: 'Description of the course content',
    example: 'Comprehensive syllabus covering programming fundamentals',
  })
  description: string;

  @ApiProperty({
    description: 'Academic level for the course content',
    example: 'Undergraduate',
  })
  academic_level: string;

  @ApiProperty({
    description: 'Publish date of the course content',
    example: '2024-01-15',
  })
  publish_date: string;

  @ApiProperty({
    description: 'Completion date of the course content',
    example: '2024-12-15',
  })
  completion_date: string;

  @ApiProperty({
    description: 'Status of the course content',
    example: 'Published',
  })
  status: string;

  @ApiProperty({
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  subject_id: string;
}