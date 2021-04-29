import { LoadClusterInOut } from '../../Srcs/load'

const clusterInOut = async (req, res, next) => {
    const clusterInOutUsers = await LoadClusterInOut()
    res.render('./clusterInOut.ejs', { clusterInOutUsers })
}

export default clusterInOut
