import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    background: ${({ theme }) => theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    @media(orientation: landscape) and (max-width: 1000px){
        height: 15%;
    }
`
const StyledA = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    padding: 10px 10% 10px 10%;
    -webkit-tap-highlight-color: transparent;
`
const StyledIcon = styled.i`
    font-size: 2.5rem;
`

const Nav = () => (
    <StyledNav>
        <StyledA href="#about-me">
            <StyledIcon className="fas fa-user"></StyledIcon>
        </StyledA>
        <StyledA href="#work">
            <StyledIcon className="fas fa-briefcase"></StyledIcon>
        </StyledA>
        <StyledA href="#contact">
            <StyledIcon className="fas fa-phone"></StyledIcon>
        </StyledA>
    </StyledNav>
)
export default Nav;