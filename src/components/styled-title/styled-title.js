import styled from "styled-components"
import React from "react"


const StyledH1 = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.white};
`
const TitleP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.black};
    display: inline;
`
const Title = () => (
    <StyledH1>
        
            <TitleP>K</TitleP>rzysztof
            <br></br>
            <TitleP>W</TitleP>itucki
        
    </StyledH1>
)
export default Title;