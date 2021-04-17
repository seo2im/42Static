//import { loadUsersInTerminal, loadDataUsersInDB } from './Srcs/load'
import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import koaStatic from 'koa-static'
import Connect from './Srcs/Model/connect'

import bodyParser from 'koa-bodyparser'
import session from 'koa-session'

import passport from './Passport/passport42'
import router from './Router'
/*
*    DB CONNECT & INITIALIZE APP
*/
const app = new Koa()
Connect()
/*
*   SESSION SETTING
*/
app.keys = ['key'] /* Have to know what this setting need */
app.use(bodyParser())
app.use(koaStatic('Public'))
const sessionConfig = {
    
}
app.use(session(sessionConfig, app))
/*
*   PASSPORT SETTING
*/
app.use(passport.initialize())
app.use(passport.session()) 
/*
    ROUTING & RENDERRING engine
*/
const render =  views(path.join(__dirname, './Views'), {
    map: { html: 'ejs' }
})
app.use(render)
app.use(router.routes())
/*
    OPEN SERVER
*/
app.listen(4000, () => {
    console.log(`server ready port: 4000`)
})
