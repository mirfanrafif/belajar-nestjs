import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  nohp: string;
}
