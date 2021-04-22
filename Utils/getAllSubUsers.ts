import { getInProgressSubjectUser } from './'

const subjectName = ['Libft',
    'netwhat', 'get_next_line', 'ft_printf',
    'ft_server', 'cub3d', 'miniRT',
    'libasm', 'ft_services', 'minishell',
    'Philosophers', 'push_swap',
    'CPP00', 'CPP01', 'CPP02', 'CPP03', 'CPP04', 'CPP05', 'CPP06', 'CPP07', 'CPP08',
    'ft_containers', 'webserv', 'ft_irc', 'ft_transcendence']

const getAllSubUsers = (users) => {
    const allSubUsers = {}
    subjectName.forEach(name => {
        allSubUsers[name] = getInProgressSubjectUser(users, name)
    })
    return allSubUsers
}

export default getAllSubUsers