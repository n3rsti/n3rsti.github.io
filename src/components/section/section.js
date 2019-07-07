import styled from "styled-components"

const StyledSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.yellow};
    background: ${props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    width: 100vw;
    height: ${props => props.auto ? 'auto' : '100vh'};
    min-height: ${props => props.min ?  '100vh' : 'auto'};
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    align-items: center;
    justify-content: ${props => props.row ? 'center' : 'auto'};
    flex-wrap: wrap;
    flex: 50%;

    @media(min-width: 1000px){
        width: calc(100vw - 100px);
        margin-left: 100px;
    }
`
export { StyledSection }