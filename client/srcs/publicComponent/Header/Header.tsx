import React from 'react'
import { Div, Logo } from './HeaderStyle'
import logo from '../../../public/logo.svg'

const Header: React.FC = () => {
    return (
        <Div>
            <Logo src={logo} />
        </Div>
    )
}

export default Header