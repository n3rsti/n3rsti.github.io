import styled from "styled-components"

const StyledAbout = styled.p`
    font-size: 1.3rem;
    width: 80%;
    text-align: center;
    margin-top: 20vh;
    color: ${({ theme }) => theme.colors.yellow};

    @media(min-width: 500px) and (orientation: portrait){
        font-size: 1.6rem;
    }

    a {
        color: ${({ theme }) => theme.colors.yellow};
        font-weight: 600;
    }
`
const StyledIcon = styled.i`
    margin-top: 20%;
    color: ${ props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    font-size: ${ props => props.big ? props.theme.iconSizes.big : props.theme.iconSizes.normal };
`
export {StyledAbout, StyledIcon}