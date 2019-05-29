import styled from "styled-components"

const StyledSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.yellow};
    background: ${props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    width: 100vw;
    height: ${props => props.auto ? 'auto' : '100vh'};
    min-height: ${props => props.auto ?  '100vh' : 'auto'};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export { StyledSection }