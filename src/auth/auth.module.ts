import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, userSchema } from 'src/schema/user.schema';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.register({
      secret: "secretKey",
      signOptions: {
        expiresIn: 36000,
      }
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: userSchema }
    ])],
  providers: [AuthService, UserService,JwtStrategy],
  controllers: [AuthController],
  exports:[JwtStrategy,PassportModule]
})
export class AuthModule { }
