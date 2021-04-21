import { Users, ClusterInOut } from './Model/Schema'

const LoadUsers = async () => {
    try {
        const users = await Users.find()
        return users
    } catch (err) {
        console.log(err)
        return []
    }
}

const LoadClusterInOut = async () => {
    try {
        const cluseterInOut = await ClusterInOut.find()
        return cluseterInOut
    } catch (err) {
        console.log(err)
        return []
    }
}

export { LoadUsers, LoadClusterInOut }

