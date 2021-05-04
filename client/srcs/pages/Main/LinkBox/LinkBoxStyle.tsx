import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
    from {
        margin-top: 0px;
    } to {
        margin-top: -10px;
    }
`

export const Div = styled.div`
    width: 10rem;
    height: 8rem;

    background-color: #292D39;

    color: white;
    
    transition: transform 0.5s;

    &:hover {
        transform: translateY(-10px);
    }
`