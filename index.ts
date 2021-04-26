//import { loadUsersInTerminal, loadDataUsersInDB } from './Srcs/load'
import express from 'express'
import path from 'path'
import Connect from './Srcs/Model/connect'

import cookieParser from 'cookie-parser'
import session from 'express-session'

import passport from './Passport/passport42'
import router from './Router'
/*
*    DB CONNECT & INITIALIZE APP
*/
const app = express()
Connect()
/*
*   SESSION & Body-parser SETTING 
*/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/Public')))
app.use(session({ resave: false, saveUninitialized: false, secret: 'some' }))
/*
*   PASSPORT SETTING
*/
app.use(passport.initialize())
app.use(passport.session())
/*
    ROUTING & RENDERRING engine
*/
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use(router)
/*
    OPEN SERVER
*/
app.listen(4000, () => {
    console.log(`server ready port: 4000`)
})
