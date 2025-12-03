import { ApiProperty } from '@nestjs/swagger';

export class Resource {
  @ApiProperty({
    description: 'Unique identifier for the resource',
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
    description: 'Resource code',
    example: 'RES001',
  })
  code: string;

  @ApiProperty({
    description: 'Name of the resource',
    example: 'Introduction to Programming PDF',
  })
  name: string;

  @ApiProperty({
    description: 'Description of the resource',
    example: 'Comprehensive guide covering basic programming concepts and examples',
  })
  description: string;

  @ApiProperty({
    description: 'Publish URL for the resource',
    example: 'https://example.com/resources/programming-guide.pdf',
  })
  publish_url: string;

  @ApiProperty({
    description: 'Size of the resource in megabytes',
    example: 15.5,
  })
  size_mb: number;

  @ApiProperty({
    description: 'Type of the resource',
    example: 'PDF',
  })
  type: string;
}