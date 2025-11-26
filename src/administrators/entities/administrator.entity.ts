import { ApiProperty } from '@nestjs/swagger';

export class Administrator {
  @ApiProperty({
    description: 'Unique identifier for the administrator',
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
    description: 'Administrator code',
    example: 'ADM001',
  })
  code: string;

  @ApiProperty({
    description: 'First name of the administrator',
    example: 'John',
  })
  first_name: string;

  @ApiProperty({
    description: 'Last name of the administrator',
    example: 'Doe',
  })
  last_name: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  profile_picture: string;

  @ApiProperty({
    description: 'Phone number',
    example: '+1234567890',
  })
  phone: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'usdbkjgiyskskjsd7!@#',
  })
  password: string;
}