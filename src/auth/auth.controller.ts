import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { DbexceptionFilter } from 'src/utils/dbexception-filter.filter';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseFilters(DbexceptionFilter)
  login(@Body() loginRequest: LoginRequestDto) {
    return this.authService.login(loginRequest);
  }
}
