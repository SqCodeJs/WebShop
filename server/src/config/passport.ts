import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Request } from "express";
import { getUserById } from "../services/getUserById";

interface JwtPayload {
    id: number;
}

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SESSIONS_SECRET,
};

export default (passport: any) => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload: JwtPayload, done: any) => {
            try {
                const user = await getUserById(jwt_payload.id);
                console.log("elo", jwt_payload);
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            } catch (error) {
                console.log(error);
            }
        })
    );
};
