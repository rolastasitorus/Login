import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../users/users.module';
import { UserService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]),UserModule],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
