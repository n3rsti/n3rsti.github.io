import styled from "styled-components"

const StyledAbout = styled.p`
    font-size: 1.3rem;
    width: 80%;
    text-align: center;
    margin-top: 20vh;
    color: ${({ theme }) => theme.colors.yellow};
`
const StyledIcon = styled.i`
    margin-top: 20%;
    color: ${ props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    font-size: ${ props => props.big ? props.theme.iconSizes.big : props.theme.iconSizes.normal };
`
export {StyledAbout, StyledIcon}