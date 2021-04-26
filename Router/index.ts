import { Router } from 'express'
import passport from '../Passport/passport42'
import { ensureLoggedIn } from 'connect-ensure-login'
import main from './main'
import * as custom from '../Custom'
import { tMiddleware } from '../Types'


const router = Router()
const index: tMiddleware = (req, res, next) => {
    res.render('./index.ejs')
}
/*
    Auth process
*/
router.get('/', index)
router.get('/login/42', passport.authenticate('42'))
router.get('/login/42/return',
    passport.authenticate('42', { 
        successRedirect: '/main',
        failureRedirect: '/'
    })
)

//router.get('/', main)
router.get('/main', ensureLoggedIn('/login/42'), main)
/*
    Set your router
*/
router.get('/userNum', ensureLoggedIn('/login/42'), custom.userNum)
router.get('/clusterInOut', ensureLoggedIn('/login/42'), custom.clusterInOut)

export default router
