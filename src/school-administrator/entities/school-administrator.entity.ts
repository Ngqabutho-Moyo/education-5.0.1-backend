import { ApiProperty } from '@nestjs/swagger';

export class SchoolAdministrator {
  @ApiProperty({
    description: 'Unique identifier for the school administrator',
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
    description: 'School administrator code',
    example: 'SCHADM001',
  })
  code: string;

  @ApiProperty({
    description: 'First name of the school administrator',
    example: 'John',
  })
  first_name: string;

  @ApiProperty({
    description: 'Last name of the school administrator',
    example: 'Smith',
  })
  last_name: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  profile_picture: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.smith@school.edu',
  })
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'usdbkjgiyskskjsd7!@#',
  })
  password: string;

  @ApiProperty({
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  school_id: string;
}