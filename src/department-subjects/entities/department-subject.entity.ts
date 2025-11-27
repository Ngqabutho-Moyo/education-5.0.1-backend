import { ApiProperty } from '@nestjs/swagger';

export class DepartmentSubject {
  @ApiProperty({
    description: 'Unique identifier for the department-subject relationship',
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
    description: 'Subject ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  subject_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Active',
  })
  status: string;
}