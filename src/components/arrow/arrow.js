import styled from "styled-components"
import { ArrowAnimation } from "../animations/animations"

const StyledArrow = styled.a`
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    text-align: center;
    animation: ${ArrowAnimation} 1.5s infinite;
    text-decoration: none;
`
const StyledArrowIcon = styled.i`
    color: ${props => props.yellow ? props.theme.colors.yellow : props.theme.colors.white};
    font-size: 3.5rem;
`
const StyledArrowText = styled.p`
    color: ${ props => props.yellow ? props.theme.colors.yellow : props.theme.colors.black };
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: ${({ theme }) => theme.weights.bold};
`
export { StyledArrow, StyledArrowIcon, StyledArrowText }