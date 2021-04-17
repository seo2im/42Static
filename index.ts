//import { loadUsersInTerminal, loadDataUsersInDB } from './Srcs/load'
import Koa, { Context } from 'koa'
import Router from 'koa-router'
import render from './Srcs/render'
import Connect from './Srcs/Model/connect'

import { LoadUsers } from './Srcs/load'
import { getInProgressCount } from './Srcs/parse'

import bodyParser from 'koa-bodyparser'
import session from 'koa-session'

import passport from 'koa-passport'
import { Strategy } from 'passport-42'
/*
*    DB CONNECT & INITIALIZE APP
*/
const app = new Koa()
const router = new Router()
Connect()
/*
*   SESSION SETTING
*/
app.keys = ['key'] /* Have to know what this setting need */
app.use(bodyParser())
const sessionConfig = {
    
}
app.use(session(sessionConfig, app))
/*
*   PASSPORT SETTING
*/
passport.use(new Strategy({
    clientID: process.env.FT_UUID,
    clientSecret: process.env.FT_SECRET,
    callbackURL: process.env.RETURN_URL,
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile)
}))
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user: Express.User, done) => {
    console.log(user)
    done(null, user)
})
app.use(passport.initialize())
app.use(passport.session()) 
const isLoggedIn = async (ctx: Context, next) => {
    console.log(ctx.isAuthenticated())
    //console.log(ctx.state)
    await next()
}
/*
    ROUTING & RENDERRING
*/
app.use(render)
const index = async (ctx) => {
    await ctx.render('index.ejs')
}
const main = async (ctx) => {
    const users = await LoadUsers();
    const ft_server = getInProgressCount(users, 'ft_server')
    const cub3d = getInProgressCount(users, 'cub3d')
    const miniRT = getInProgressCount(users, 'miniRT')
    if (!users)
        await ctx.render('404.ejs')
    else 
        await ctx.render('main.ejs' , { users: ft_server })
}
router.get('/', index)
router.get('/login/42', passport.authenticate('42'))
router.get('/login/42/return',
    passport.authenticate('42', { 
        successRedirect: '/main',
        failureRedirect: '/'
    }),
    
)
app.use(isLoggedIn)
router.get('/main', isLoggedIn ,main)
app.use(router.routes())
/*
    OPEN SERVER
*/
app.listen(4000, () => {
    console.log(`server ready port: 4000`)
})

