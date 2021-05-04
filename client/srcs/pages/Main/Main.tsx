import React from 'react'
import LinkBox from './LinkBox/LinkBox'
import { Div } from './MainStyle'

type Props = {
    links: string[]
}
const Main: React.FC<Props> = ({ links }) => {
    return (
        <Div>
            <h1>List of Static Data</h1>
            {links.map((link, i) => <LinkBox key={`linkBox_${i}`} link={link}/>)}
        </Div>
    ) 
}

/*
    For Testing
*/
const defaultProps: Props = {
    links: ['userNum', 'clusterInOut']
}
Main.defaultProps = defaultProps

export default Main