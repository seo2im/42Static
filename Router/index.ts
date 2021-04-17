import Router from 'koa-router'
import passport from '../Passport/passport42'
import main from './main'
import * as custom from '../Custom'

const router = new Router()
const isLoggedIn = async (ctx, next) => {
    console.log(ctx.isAuthenticated())
    await next()
}
const index = async (ctx) => {
    await ctx.render('./index.ejs')
}

router.get('/', index)
router.get('/login/42', passport.authenticate('42'))
router.get('/login/42/return',
    passport.authenticate('42', { 
        successRedirect: '/main',
        failureRedirect: '/'
    }),
)
router.get('/main', isLoggedIn ,main)
/*
    Set your router
*/
router.get('/userNum', isLoggedIn, custom.userNum)

export default router
