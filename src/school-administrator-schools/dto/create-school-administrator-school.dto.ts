import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateSchoolAdministratorSchoolDto {
  @ApiProperty({
    description: 'School Administrator ID UUID',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  school_admin_id: string;

  @ApiProperty({
    description: 'School ID UUID',
    example: '6f8c322c-b8ff-4224-97eb-edbec26b1033',
  })
  @IsUUID()
  school_id: string;

  @ApiProperty({
    description: 'Status of the relationship',
    example: 'active',
  })
  @IsString()
  status: string;

  @ApiProperty({
    description: 'Administrator ID who made the assignment',
    example: '380ca6bc-cae9-4486-a543-056029aaba1c',
  })
  @IsUUID()
  assigned_by: string;
}
