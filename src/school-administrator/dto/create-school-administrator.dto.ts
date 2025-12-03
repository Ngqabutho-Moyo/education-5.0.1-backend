import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsUUID } from 'class-validator';

export class CreateSchoolAdministratorDto {
  @ApiProperty({
    description: 'First name of the school administrator',
    example: 'John',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'Last name of the school administrator',
    example: 'Smith',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'URL or path to profile picture',
    example: 'https://example.com/profile.jpg',
  })
  @IsString()
  profile_picture: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.smith@school.edu',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'usdbkjgiyskskjsd7!@#',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Super admin ID who created the user',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  @IsUUID()
  created_by: string;
}
