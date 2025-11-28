import { ApiProperty } from '@nestjs/swagger';

export class AdministratorSchool {
  @ApiProperty({
    description: 'Unique identifier for the administrator-school relationship',
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
    description: 'Administrator ID UUID',
    example: '2a60d171-a749-48e5-8b4b-2b03134d5642',
  })
  admin_id: string;

  @ApiProperty({
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  school_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  status: string;
}