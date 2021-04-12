import fs from 'fs'
import path from 'path'
import { tUser } from '../Types'
import mongoose, { model, Schema } from 'mongoose'
import { DB_USER, DB_PASSWORD } from './Secret'
/*
    load fron DB
*/
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/admin`
const dbConnect = async () => {
    await mongoose.connect(URL, {
        dbName: "42Static",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connected!')
    }).catch(err => {
        console.log(err)
    })
}
const User = new Schema({
    "id": {
      "type": "Number"
    },
    "email": {
      "type": "String"
    },
    "login": {
      "type": "String"
    },
    "first_name": {
      "type": "String"
    },
    "last_name": {
      "type": "String"
    },
    "usual_first_name": {
      "type": "Mixed"
    },
    "url": {
      "type": "String"
    },
    "phone": {
      "type": "String"
    },
    "displayname": {
      "type": "String"
    },
    "usual_full_name": {
      "type": "String"
    },
    "image_url": {
      "type": "String"
    },
    "staff?": {
      "type": "Boolean"
    },
    "correction_point": {
      "type": "Number"
    },
    "pool_month": {
      "type": "String"
    },
    "pool_year": {
      "type": "Date"
    },
    "location": {
      "type": "Mixed"
    },
    "wallet": {
      "type": "Number"
    },
    "anonymize_date": {
      "type": "Date"
    },
    "groups": {
      "type": "Array"
    },
    "cursus_users": {
      "type": [
        "Mixed"
      ]
    },
    "projects_users": {
      "type": [
        "Mixed"
      ]
    },
    "languages_users": {
      "type": [
        "Mixed"
      ]
    },
    "achievements": {
      "type": [
        "Mixed"
      ]
    },
    "titles": {
      "type": "Array"
    },
    "titles_users": {
      "type": "Array"
    },
    "partnerships": {
      "type": "Array"
    },
    "patroned": {
      "type": "Array"
    },
    "patroning": {
      "type": "Array"
    },
    "expertises_users": {
      "type": "Array"
    },
    "roles": {
      "type": "Array"
    },
    "campus": {
      "type": [
        "Mixed"
      ]
    },
    "campus_users": {
      "type": [
        "Mixed"
      ]
    }
  })
const userModel = model('users', User, 'users')

const loadDataUsersInDB = async () => {
    await dbConnect()

    try {
        const users = await userModel.find()
        return users
    } catch (err) {
        console.log(err)
    }

}

/*
    load client terminal
*/
const loadUsersInTerminal: () => tUser[] = () => {
    const files :string[] = fs.readdirSync(path.join(__dirname, '../Data/users'))

    let fileString: string
    const Users: tUser[] = []
    files.forEach(filename => {
        fileString = fs.readFileSync(path.join(__dirname, `../Data/users/${filename}`), 'utf-8')
        Users.push(JSON.parse(fileString))
    })

    return Users
}

export { loadUsersInTerminal, loadDataUsersInDB }
