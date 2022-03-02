import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @ApiProperty()
  nama: string;

  @IsNotEmpty()
  @ApiProperty()
  nohp: string;
}
