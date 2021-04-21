import { LoadClusterInOut } from '../../Srcs/load'

const clusterInOut = async (ctx) => {
    const clusterInOutUsers = await LoadClusterInOut()

    await ctx.render('./clusterInOut.ejs', { clusterInOutUsers })
}

export default clusterInOut
