import { getAllSubUsers } from './'

const getRealSubUsers = (users, clusterInOut) => {
    const realUser = Array.from(new Set(clusterInOut.map(e => e.id)))
    const RealSubUsers = {}

    const allSubUsers = getAllSubUsers(users);
    for (let subName in allSubUsers) {
        RealSubUsers[subName] = realUser.filter(e => allSubUsers[subName].map(user => user.login).indexOf(e) !== -1)
    }
    return RealSubUsers
}

export default getRealSubUsers