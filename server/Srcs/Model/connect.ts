import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Users } from './Schema'
dotenv.config()
/*
    load fron DB
*/
const URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/admin`
const Connect = async () => {
    await mongoose.connect(URL, {
        dbName: '42Static',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connected!')
    }).catch(err => {
        console.log(err)
    })
}

export default Connect
