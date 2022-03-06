import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserRequestDto {
  @IsNotEmpty()
  @ApiProperty()
  nama: string;

  @IsNotEmpty()
  @ApiProperty()
  nohp: string;

  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
