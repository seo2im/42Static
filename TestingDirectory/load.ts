import fs from 'fs'
import { tUser } from '../Types'
import path from 'path'

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