import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/core/repository/user-repository/users.entity';

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
