import { ApiProperty } from '@nestjs/swagger';

export class Assignment {
  @ApiProperty({
    description: 'Unique identifier for the assignment',
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
    description: 'Syllabus ID UUID',
    example: '72d26287-c8fd-4cc8-a7dc-6770ec39b379',
  })
  syllabus_id: string;

  @ApiProperty({
    description: 'Assignment code',
    example: 'ASS001',
  })
  code: string;

  @ApiProperty({
    description: 'Name of the assignment',
    example: 'Programming Fundamentals Project',
  })
  name: string;

  @ApiProperty({
    description: 'Description of the assignment',
    example: 'Create a simple console application demonstrating basic programming concepts',
  })
  description: string;

  @ApiProperty({
    description: 'Publish URL for the assignment',
    example: 'https://example.com/assignments/programming-fundamentals',
  })
  publish_url: string;

  @ApiProperty({
    description: 'Submission URL for the assignment',
    example: 'https://example.com/submit/programming-fundamentals',
  })
  submission_url: string;

  @ApiProperty({
    description: 'Date when assignment was assigned',
    example: '2024-09-01',
  })
  date_assigned: string;

  @ApiProperty({
    description: 'Due date for the assignment',
    example: '2024-09-30',
  })
  due_date: string;

  @ApiProperty({
    description: 'Percentage of coursework this assignment represents',
    example: 25.5,
  })
  percentage_of_coursework: number;
}