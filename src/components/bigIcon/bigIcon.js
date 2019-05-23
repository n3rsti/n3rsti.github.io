import styled from "styled-components"

const StyledIcon = styled.i`
    margin-top: 20%;
    color: ${ props => props.black ? props.theme.colors.black : props.theme.colors.yellow };
    font-size: ${ props => props.big ? props.theme.iconSizes.big : props.theme.iconSizes.normal };
`
export default StyledIcon;
