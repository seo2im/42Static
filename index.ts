//import { loadUsersInTerminal, loadDataUsersInDB } from './Srcs/load'
import Koa, { Context } from 'koa'
import Router from 'koa-router'
import render from './Srcs/render'
import Connect from './Srcs/Model/connect'

import { LoadUsers } from './Srcs/load'
import { getInProgressCount } from './Srcs/parse'

import passport from 'koa-passport'
import { Strategy } from 'passport-42'
import { ensureLoggedIn } from 'connect-ensure-login'

const app = new Koa()
const router = new Router()
Connect()

passport.use(new Strategy({
    clientID: process.env.FT_UUID,
    clientSecret: process.env.FT_SECRET,
    callbackURL: process.env.RETURN_URL,
}, (accessToken, refreshToken, profile, cb) => {
    console.log(profile)
    return cb(null, profile)
}))

passport.serializeUser((user, cb) => {
    cb(null, user)
})
passport.deserializeUser((user: Express.User, cb) => {
    cb(null, user)
})

router.use(passport.initialize())
router.use(passport.session())

app.use(render)
/*
    router function
*/
const index = async (ctx) => {
    await ctx.render('index.ejs')
}

const main = async (ctx) => {
    const users = await LoadUsers();
    const ft_server = getInProgressCount(users, 'ft_server')
    const cub3d = getInProgressCount(users, 'cub3d')
    const miniRT = getInProgressCount(users, 'miniRT')
    console.log(ft_server.length, cub3d.length, miniRT.length)
    if (!users)
        await ctx.render('404.ejs')
    else 
        await ctx.render('main.ejs' , { users: ft_server })
}

router.get('/', index)

router.get('/login/42', passport.authenticate('42'))
router.get('/login/42/return',
    passport.authenticate('42', { failureRedirect: '/' }),
    (ctx) => {
        return ctx.redirect('/main')
    }
)

router.get('/main', main)

app.use(router.routes())
app.listen(4000, () => {
    console.log(`server ready port: 4000`)
})

