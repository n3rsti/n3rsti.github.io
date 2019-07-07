import styled from "styled-components"

const StyledH1 = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.black};

    @media(min-width: 600px){
        font-size: 5rem;
    }
`
const TitleP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.black};
    display: inline;
    
    @media(min-width: 600px){
        font-size: 5rem;
    }
`
export { StyledH1, TitleP }