import { ApiProperty } from '@nestjs/swagger';

export class SyllabusResource {
  @ApiProperty({
    description: 'Unique identifier for the syllabus-resource relationship',
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
    description: 'Resource ID UUID',
    example: 'a8b6eccc-4aca-46cf-a5af-19a3b24d0968',
  })
  resource_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Active',
  })
  status: string;
}