import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, IsNumber } from 'class-validator';

export class CreateResourceDto {
  @ApiProperty({
    description: 'Unique identifier for the resource',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Timestamp of creation',
    example: '2025-08-21 12:58:15.357772+00',
  })
  @IsString()
  @IsOptional()
  created_at?: string;

  @ApiProperty({
    description: 'Timestamp of last update',
    example: '2025-08-21 12:58:15.357772+00',
  })
  @IsString()
  @IsOptional()
  updated_at?: string;

  @ApiProperty({
    description: 'Syllabus ID UUID',
    example: '72d26287-c8fd-4cc8-a7dc-6770ec39b379',
  })
  @IsUUID()
  @IsOptional()
  syllabus_id?: string;

  @ApiProperty({
    description: 'Resource code',
    example: 'RES001',
  })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({
    description: 'Name of the resource',
    example: 'Introduction to Programming PDF',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Description of the resource',
    example: 'Comprehensive guide covering basic programming concepts and examples',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Publish URL for the resource',
    example: 'https://example.com/resources/programming-guide.pdf',
  })
  @IsString()
  @IsOptional()
  publish_url?: string;

  @ApiProperty({
    description: 'Size of the resource in megabytes',
    example: 15.5,
  })
  @IsNumber()
  @IsOptional()
  size_mb?: number;

  @ApiProperty({
    description: 'Type of the resource',
    example: 'PDF',
  })
  @IsString()
  @IsOptional()
  type?: string;
}