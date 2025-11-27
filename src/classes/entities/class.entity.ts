import { ApiProperty } from '@nestjs/swagger';

export class Class {
  @ApiProperty({
    description: 'Unique identifier for the class',
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
    description: 'Teacher in charge UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  teacher_in_charge: string;

  @ApiProperty({
    description: 'Academic level for the class',
    example: 'Grade 10',
  })
  academic_level: string;

  @ApiProperty({
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  subject_id: string;
}