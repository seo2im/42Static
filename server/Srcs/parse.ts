import { tUser } from '../Types'

const getInProgressCount = (users, subject) => {
    return users.filter(user => {
        if (user.projects_users.some(project => project.project.name === subject && project.status === 'in_progress')) return true
        else return false
    })
}

export { getInProgressCount }