import React from "react"
import styled from "styled-components"
import logo from "../../img/logo2.png"

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

    @media(min-width: 1000px){
        width: 100px;
        height: 100vh;
        left: 0;
        top: 0;
        flex-direction: column;
        background: ${({ theme }) => theme.colors.black};
    }

`
const StyledA = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    padding: 10px 10% 10px 10%;
    -webkit-tap-highlight-color: transparent;

    @media(min-width: 1000px){
        color: ${({ theme }) => theme.colors.yellow};
        margin: 30px;
    }

`
const StyledIcon = styled.i`
    font-size: 2.5rem;

    @media(min-width: 600px){
        font-size: 3rem;
    }
`
const StyledHeroImg = styled.img`
    width: 70px;
    height: 70px;
    display: none;
    position: absolute;
    top: 20px;

    @media(min-width: 1000px){
        display: block;
    }
`

const Nav = () => (
    <StyledNav>
        <StyledHeroImg src={logo}></StyledHeroImg>
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