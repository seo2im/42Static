import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Users } from './Schema'
dotenv.config()
/*
    load fron DB
*/
const URL: string = process.env.DB_URL ? process.env.DB_URL : ''
console.log(URL)
const Connect = async () => {
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connected!')
    }).catch(err => {
        console.log(err)
    })
}

export default Connect
