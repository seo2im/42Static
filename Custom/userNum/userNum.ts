import { LoadUsers } from '../../Srcs/load'
import { getInProgressSubjectUser } from '../../Utils'

const userNum = async (ctx) => {
    const users = await LoadUsers()
    
    const ft_server =  getInProgressSubjectUser(users, 'ft_server')
    const cub3d = getInProgressSubjectUser(users, 'cub3d')
    console.log(cub3d.length)

    await ctx.render('./userNum.ejs', { users: { ft_server, cub3d } })
}

export default userNum