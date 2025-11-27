import { ApiProperty } from '@nestjs/swagger';

export class StudentClass {
  @ApiProperty({
    description: 'Unique identifier for the student-class relationship',
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
    description: 'Student ID UUID',
    example: 'c1398c6b-e8d6-437d-a713-f362ddbc63aa',
  })
  student_id: string;

  @ApiProperty({
    description: 'Class ID UUID',
    example: 'aa49f087-0589-47a7-8399-1fb736c57368',
  })
  class_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Enrolled',
  })
  status: string;
}