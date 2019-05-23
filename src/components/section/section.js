import styled from "styled-components"

const StyledSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.yellow};
    background: ${props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    width: 100vw;
    height: 100vh;
`
export default StyledSection