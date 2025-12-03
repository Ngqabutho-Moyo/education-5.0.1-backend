import { ApiProperty } from '@nestjs/swagger';

export class SyllabusAssignment {
  @ApiProperty({
    description: 'Unique identifier for the syllabus-assignment relationship',
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
    description: 'Assignment ID UUID',
    example: 'f5dcebaf-b71c-4764-a640-16bec65bccee',
  })
  assignment_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  status: string;
}