/*
    get all users and get subject name
*/
const getInProgressSubjectUser = (users, subject) => {
    return users.filter(user => {
        if (user.projects_users.some(project => project.project.name === subject && project.status === 'in_progress')) return true
        else return false
    })
}

export default getInProgressSubjectUser
