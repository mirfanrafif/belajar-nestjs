import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/core/repository/user-repository/user-repository.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SECRET } from './auth.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    UserRepositoryModule,
    JwtModule.register({
      secret: SECRET,
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
