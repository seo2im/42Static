import { LoadUsers } from '../../Srcs/load'
import { getInProgressSubjectUser } from '../../Utils'

const userNum = async (ctx) => {
    const users = await LoadUsers()
 
    const Libft = getInProgressSubjectUser(users, 'Libft')
    const netwhat = getInProgressSubjectUser(users, 'netwhat')
    const get_next_line = getInProgressSubjectUser(users, 'get_next_line')
    const ft_printf = getInProgressSubjectUser(users, 'ft_printf')
    const ft_server =  getInProgressSubjectUser(users, 'ft_server')
    const cub3d = getInProgressSubjectUser(users, 'cub3d')
    const miniRT = getInProgressSubjectUser(users, 'miniRT')
    const libasm = getInProgressSubjectUser(users, 'libasm')
    const ft_services = getInProgressSubjectUser(users, 'ft_services')
    const minishell = getInProgressSubjectUser(users, 'minishell')
    const Philosophers = getInProgressSubjectUser(users, 'Philosophers')
    const push_swap = getInProgressSubjectUser(users, 'push_swap')
    const CPP00 = getInProgressSubjectUser(users, 'CPP Module 00')
    const CPP01 = getInProgressSubjectUser(users, "CPP Module 01")
    const CPP02 = getInProgressSubjectUser(users, "CPP Module 02")
    const CPP03 = getInProgressSubjectUser(users, "CPP Module 03")
    const CPP04 = getInProgressSubjectUser(users, "CPP Module 04")
    const CPP05 = getInProgressSubjectUser(users, 'CPP Module 05')
    const CPP06 = getInProgressSubjectUser(users, 'CPP Module 06')
    const CPP07 = getInProgressSubjectUser(users, 'CPP Module 07')
    const CPP08 = getInProgressSubjectUser(users, 'CPP Module 08')
    const ft_containers = getInProgressSubjectUser(users, 'ft_containers')
    const webserv = getInProgressSubjectUser(users, 'webserv')
    const ft_irc = getInProgressSubjectUser(users, 'ft_irc')
    const ft_transcendence = getInProgressSubjectUser(users, 'ft_transcendence')
    

    await ctx.render('./userNum.ejs',
        {
            users: { 
                Libft,
                netwhat, get_next_line, ft_printf,
                ft_server, cub3d, miniRT,
                libasm, ft_services, minishell,
                Philosophers, push_swap,
                CPP00, CPP01, CPP02, CPP03, CPP04, CPP05, CPP06, CPP07, CPP08,
                ft_containers, webserv, ft_irc, ft_transcendence
            }
        })
}

export default userNum