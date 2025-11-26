import { ApiProperty } from '@nestjs/swagger';

export class Teacher {
  @ApiProperty({
    description: 'Unique identifier for the teacher',
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
    description: 'Teacher code',
    example: 'TCH001',
  })
  code: string;

  @ApiProperty({
    description: 'First name of the teacher',
    example: 'John',
  })
  first_name: string;

  @ApiProperty({
    description: 'Last name of the teacher',
    example: 'Doe',
  })
  last_name: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  profile_picture: string;

  @ApiProperty({
    description: 'Department UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  department: string;

  @ApiProperty({
    description: 'Array of teacher qualifications',
    example: ['PhD in Computer Science', 'MSc in Education'],
    type: [String],
  })
  qualifications: string[];

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