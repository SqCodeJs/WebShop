import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { getUserById } from "../services/getUserById";
import dotenv from 'dotenv';
import { resolve } from 'path';

const envPath = resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

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
                
                if (user) {
                    return done(null, user);
                }
                
                return done(null, false);
            } catch (error) {
                console.log(error);
                return done(error, false)
            }
        })
    );
};
