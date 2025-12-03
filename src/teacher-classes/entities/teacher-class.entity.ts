import { ApiProperty } from '@nestjs/swagger';

export class TeacherClass {
  @ApiProperty({
    description: 'Unique identifier for the teacher-class relationship',
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
    description: 'Teacher ID UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  teacher_id: string;

  @ApiProperty({
    description: 'Class ID UUID',
    example: 'aa49f087-0589-47a7-8399-1fb736c57368',
  })
  class_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  status: string;
}