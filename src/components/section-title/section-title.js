import styled from "styled-components"

const StyledSectionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: 2.5rem;
    margin-top: 5vh;
    margin-bottom: ${props => props.marginBot ? '5vh' : '0'};
`
export default StyledSectionTitle