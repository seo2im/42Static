import { Users } from './Model/Schema'

const LoadUsers = async () => {
    try {
        const users = await Users.find()
        return users
    } catch (err) {
        console.log(err)
    }

}

export { LoadUsers }
