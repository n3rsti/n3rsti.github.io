import styled from "styled-components"
import { keyframes } from 'styled-components';
const ArrowAnimation = keyframes`
  0% {
    transform: translate(-50%, 0)
  }
  50% {
    transform: translate(-50%, 30px)
  }
`

const StyledArrow = styled.a`
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    text-align: center;
    animation: ${ArrowAnimation} 1.5s infinite;
    text-decoration: none;

    @media(max-width: 900px) and (orientation: landscape){
      display: none;
    }
    @media(min-width: 600px) and (orientation: portrait){
        font-size: 1.1rem;
    }
`
const StyledArrowIcon = styled.i`
    color: ${props => props.yellow ? props.theme.colors.yellow : props.theme.colors.white};
    font-size: 3.5rem;

    @media(min-width: 600px) and (orientation: portrait){
        font-size: 4rem;
    }


`
const StyledArrowText = styled.p`
    color: ${ props => props.yellow ? props.theme.colors.yellow : props.theme.colors.black };
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: ${({ theme }) => theme.weights.bold};


`
export { StyledArrow, StyledArrowIcon, StyledArrowText }