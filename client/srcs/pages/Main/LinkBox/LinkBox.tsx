import React from 'react'
import { Div } from './LinkBoxStyle'
import { Link } from 'react-router-dom'

type Props = {
    link: string
}
const LinkBox: React.FC<Props> = ({ link }) => {
    return (
        <Link to={`/${link}`}>
            <Div>
                {link}
            </Div>
        </Link>
    )
}

export default LinkBox