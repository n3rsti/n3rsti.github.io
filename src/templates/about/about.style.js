import styled from "styled-components"

const StyledAbout = styled.p`
    font-size: 1.3rem;
    width: 80%;
    text-align: center;
    margin-top: 20vh;
    color: ${({ theme }) => theme.colors.yellow};
    max-width: 700px;

    ::selection {
        background: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.black};
    }
    @media(min-width: 500px){
        font-size: 1.6rem;
    }

    a {
        color: ${({ theme }) => theme.colors.yellow};
        font-weight: 600;
        ::selection {
            background: ${({ theme }) => theme.colors.yellow};
            color: ${({ theme }) => theme.colors.black};
        }   
    }
    b::selection {
        background: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.black};
    }
`
const StyledIcon = styled.i`
    margin-top: 20vh;
    color: ${ props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    font-size: ${ props => props.big ? props.theme.iconSizes.big : props.theme.iconSizes.normal };
    @media(min-width: 800px){
        font-size: 6rem;
    }
`

export {StyledAbout, StyledIcon}