import { ApiProperty } from '@nestjs/swagger';

export class Student {
  @ApiProperty({
    description: 'Unique identifier for the student',
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
    description: 'Student code',
    example: 'STU001',
  })
  code: string;

  @ApiProperty({
    description: 'First name of the student',
    example: 'John',
  })
  first_name: string;

  @ApiProperty({
    description: 'Last name of the student',
    example: 'Doe',
  })
  last_name: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  profile_picture: string;

  @ApiProperty({
    description: 'Academic level of the student',
    example: 'Undergraduate',
  })
  academic_level: string;

  @ApiProperty({
    description: 'Date when student was enrolled',
    example: '2024-09-01',
  })
  enrolment_date: string;

  @ApiProperty({
    description: 'Password',
    example: 'usdbkjgiyskskjsd7!@#',
  })
  password: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com',
  })
  email: string;
}