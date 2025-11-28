import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsEmail,
  IsArray,
  IsUUID,
} from 'class-validator';
import { CreateStudentClassDto } from 'src/student-classes/dto/create-student-class.dto';

export class CreateTeacherDto {
  @ApiProperty({
    description: 'First name of the teacher',
    example: 'Simon',
  })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({
    description: 'Last name of the teacher',
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
    description: 'Department UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  @IsOptional()
  department?: string;

  @ApiProperty({
    description: 'Array of teacher qualifications',
    example: ['PhD in Computer Science', 'MSc in Education'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  qualifications?: string[];

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

  @ApiProperty({
    description: 'School ID',
    example: 'fc4c0906-306d-4f6f-ade2-c51aff7751f0',
  })
  @IsString()
  @IsOptional()
  school_id?: string;
}

export class EnrolStudentDto extends PartialType(CreateStudentClassDto){}
