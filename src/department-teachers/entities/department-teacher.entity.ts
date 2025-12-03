import { ApiProperty } from '@nestjs/swagger';

export class DepartmentTeacher {
  @ApiProperty({
    description: 'Unique identifier for the department-teacher relationship',
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
    description: 'Department ID UUID',
    example: '0b9df507-944e-4222-ba3a-afa329d13840',
  })
  department_id: string;

  @ApiProperty({
    description: 'Teacher ID UUID',
    example: 'f2e9b148-6862-4f92-960b-dcc99bb72c31',
  })
  teacher_id: string;
}