//import { loadUsersInTerminal, loadDataUsersInDB } from './Srcs/load'
import Koa, { Context } from 'koa'
import Router from 'koa-router'
import render from './Srcs/render'
import Connect from './Srcs/Model/connect'

import { LoadUsers } from './Srcs/load'

const app = new Koa()
const router = new Router()
Connect()

app.use(render)
/*
    router function
*/
const main = async (ctx) => {
    const users = await LoadUsers();
    if (!users)
        await ctx.render('404')
    else 
        await ctx.render('index' , { users: users })
}
router.get('/', main)
app.use(router.routes())



app.use((ctx: Context) => {
    ctx.body = 'hello world'
})

app.listen(4000, () => {
    console.log("server ready")
})

