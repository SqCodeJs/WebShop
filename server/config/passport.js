require("dotenv").config();
const { getUserById } = require("../services/getUserById");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SESSIONS_SECRET;
const bcrypt = require("bcrypt");

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
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
