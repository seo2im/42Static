import { list } from '../Custom'
import { tMiddleware } from '../Types'

const main: tMiddleware = (req, res, next) => {
    res.render('./main.ejs', { list })
}

export default main
