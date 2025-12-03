import { ApiProperty } from '@nestjs/swagger';

export class SchoolTeacher {
  @ApiProperty({
    description: 'Unique identifier for the school-teacher relationship',
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
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  school_id: string;

  @ApiProperty({
    description: 'Teacher ID UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  teacher_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  status: string;
}