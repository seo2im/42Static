import { Context } from 'koa'
import Router from 'koa-router'
import passport from '../Passport/passport42'
import main from './main'
import * as custom from '../Custom'
import { curveMonotoneX } from 'd3'

const router = new Router()
const isLoggedIn = async (ctx: Context, next) => {
    if (ctx.isAuthenticated())
        await next()
    else
        ctx.redirect('/')
}
const index = async (ctx) => {
    await ctx.render('./index.ejs')
}
/*
    Auth process
*/
router.get('/', index)
router.get('/login/42', passport.authenticate('42'))
router.get('/login/42/return',
    passport.authenticate('42', { 
        failureRedirect: '/'
    }),
    async (ctx) => {
        console.log('redirect')
        await ctx.login({id : 1})
        ctx.redirect('/main')
    }
)

//router.get('/', main)
router.get('/main', isLoggedIn, main)
/*
    Set your router
*/
router.get('/userNum', isLoggedIn, custom.userNum)

export default router
