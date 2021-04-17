import { list } from '../Custom'

const main = async (ctx) => {
    await ctx.render('./main.ejs', { list })
}

export default main
