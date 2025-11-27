import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSyllabusAssignmentDto {
  @ApiProperty({
    description: 'Unique identifier for the syllabus-assignment relationship',
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
    description: 'Assignment ID UUID',
    example: 'f5dcebaf-b71c-4764-a640-16bec65bccee',
  })
  @IsUUID()
  @IsOptional()
  assignment_id?: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'Active',
  })
  @IsString()
  @IsOptional()
  status?: string;
}