import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateParentGuardianDto {
  @ApiProperty({
    description: 'Unique identifier for the parent/guardian',
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
    description: 'Parent/Guardian code',
    example: 'PG001',
  })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({
    description: 'First name of the parent/guardian',
    example: 'Sarah',
  })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({
    description: 'Last name of the parent/guardian',
    example: 'Moyo',
  })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  @IsString()
  @IsOptional()
  profile_picture?: string;

  @ApiProperty({
    description: 'Phone number',
    example: '263777888222',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Email address',
    example: 'smoyo@gmail.com',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Password',
    example: 'password',
  })
  @IsString()
  @IsOptional()
  password?: string;
}