import { ApiProperty } from '@nestjs/swagger';

export class StudentParentsGuardian {
  @ApiProperty({
    description: 'Unique identifier for the student-parent/guardian relationship',
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
    description: 'Parent/Guardian ID UUID',
    example: '79d8cfbe-31ae-4fde-b07d-b0b7ede4b651',
  })
  parent_guardian_id: string;
}