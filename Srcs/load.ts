import { Users } from './Model/Schema'
import { tUser } from '../Types'

const LoadUsers = async () => {
    try {
        const users = await Users.find()
        return users
    } catch (err) {
        console.log(err)
        return []
    }
}

export { LoadUsers }
