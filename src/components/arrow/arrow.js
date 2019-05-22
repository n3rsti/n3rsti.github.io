import React from "react"
import styled from "styled-components"

const StyledArrow = styled.div`
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    text-align: center;
`
const StyledArrowIcon = styled.i`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.5rem;
`
const StyledArrowText = styled.p`
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: ${({ theme }) => theme.weights.bold};
`
const Arrow = () => (
    <StyledArrow>
        <StyledArrowText>About me</StyledArrowText>
        <StyledArrowIcon className="fas fa-arrow-down"></StyledArrowIcon>
    </StyledArrow>
)
export default Arrow;