const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt

const Usuario = require("../models/Usuario")

module.exports = passport.use(
    new jwtStrategy(
        {
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        },
        (jwt_payload, done) => {
            // console.log(jwt_payload)
            Usuario.findOne({_id: jwt_payload._doc._id})
                .then((usuario) => {
                if (usuario) {
                    return done(null, usuario)     
                } else {
                    return done(null, false)
                }
                })
                .catch((err) => {
                return done(err, false)
                })
        }
    )
)