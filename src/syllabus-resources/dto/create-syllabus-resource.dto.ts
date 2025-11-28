import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSyllabusResourceDto {
  @ApiProperty({
    description: 'Unique identifier for the syllabus-resource relationship',
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
    description: 'Resource ID UUID',
    example: 'a8b6eccc-4aca-46cf-a5af-19a3b24d0968',
  })
  @IsUUID()
  @IsOptional()
  resource_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  @IsString()
  @IsOptional()
  status?: string;
}