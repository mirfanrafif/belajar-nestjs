import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/core/repository/user-repository/user.constant';
import { User } from 'src/core/repository/user-repository/users.entity';
import { Repository } from 'typeorm';
import { LoginRequestDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginRequest: LoginRequestDto) {
    const user = await this.userRepository.findOneOrFail({
      where: {
        username: loginRequest.username,
      },
    });
    if (user && user.password === loginRequest.password) {
      const { password, ...payload } = user;
      return this.jwtService.sign(payload);
    }
    return null;
  }
}
