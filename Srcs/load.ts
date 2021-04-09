import fs from 'fs'
import path from 'path'
import { tUser } from '../Types'

const loadUsers: () => tUser[] = () => {
    const files :string[] = fs.readdirSync(path.join(__dirname, '../Data/users'))

    let fileString: string
    const Users: tUser[] = []
    files.forEach(filename => {
        fileString = fs.readFileSync(path.join(__dirname, `../Data/users/${filename}`), 'utf-8')
        Users.push(JSON.parse(fileString))
    })

    return Users
}

export { loadUsers }
