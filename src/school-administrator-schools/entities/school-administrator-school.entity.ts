import { ApiProperty } from '@nestjs/swagger';

export class SchoolAdministratorSchool {
  @ApiProperty({
    description: 'Unique identifier for the school administrator-school relationship',
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
    description: 'School Administrator ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  school_admin_id: string;

  @ApiProperty({
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  school_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Active',
  })
  status: string;
}