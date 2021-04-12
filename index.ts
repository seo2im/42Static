import { loadUsersInTerminal, loadDataUsersInDB } from './Srcs/load'

/*
    In Client Terminal
*/
/*
const users = loadUsersInTerminal()
const cursus = users.filter(user => user.cursus_users.length > 1)

console.log(cursus.length)

const member = cursus.filter(user => user.cursus_users[1].grade === "Member")
console.log(member.map(user => user.login))
*/

/*
    In DB Connect
*/
const main = async () => {
    const users = await loadDataUsersInDB()
    if (users)
        console.log(users.length)
    else
        console.log("error in load")
    /*
    const h3 = document.createElement('h3')
    const text = document.createTextNode(`${users[0].login}`)
    h3.appendChild(text);
    document.body.appendChild(h3)
    */
    
}

main()