import passport from 'passport'
import { Strategy } from 'passport-42'

passport.use(new Strategy({
    clientID: process.env.FT_UUID,
    clientSecret: process.env.FT_SECRET,
    callbackURL: process.env.RETURN_URL,
    passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
    return done(null, profile.id)
}))
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user: Express.User, done) => {
    done(null, user)
})

export default passport
