import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { UserService } from "src/user/user.service"
import { JwtPayload } from "./jwt.payload.interface"


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private userService: UserService) {
        super(
            {
                secretOrKey: 'secretKey',
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            }
        )
    }


    async validate(payload: JwtPayload) {
        const { email } = payload;
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}