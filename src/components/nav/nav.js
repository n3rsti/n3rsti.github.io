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
    padding: ${ props => props.github ? '10px' : '10px 10% 10px 10%'};
    -webkit-tap-highlight-color: transparent;

    display: ${ props => props.github ? 'none' : 'block'};


    @media(min-width: 1000px){
        color: ${({ theme }) => theme.colors.yellow};
        margin: 30px;
        margin: ${ props => props.github ? '5px' : '30px'};

        display: block;
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
const StyledMedia = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;

    @media(min-width: 1000px){
        display: flex;
    }
`
const StyledMediaIcon = styled.i`
    display: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.media};

    ::before {
        display: none;
    }

    @media(min-width: 1000px){
        display: block;

        ::before {
            display: block;
        }
    }
`
const Nav = () => (
    <StyledNav>
        <StyledHeroImg src={logo} alt="Logo"></StyledHeroImg>
        <StyledA href="#about-me" aria-label="Check informations about me" title="About me">
            <StyledIcon className="fas fa-user"></StyledIcon>
        </StyledA>
        <StyledA href="#work" aria-label="Look at my projects" title="Projects">
            <StyledIcon className="fas fa-briefcase"></StyledIcon>
        </StyledA>
        <StyledA href="#contact" aria-label="Send message in contact section" title="Contact">
            <StyledIcon className="fas fa-phone"></StyledIcon>
        </StyledA>
        <StyledMedia>
            <StyledA github href="https://github.com/n3rsti" aria-label="Check out my github profile" title="Github profile">
                <StyledMediaIcon className="fab fa-github"></StyledMediaIcon>
            </StyledA>
            <StyledA github href="https://www.npmjs.com/~n3rsti" aria-label="Check out my npm profile" title="Npm profile">
                <StyledMediaIcon className="fab fa-npm"></StyledMediaIcon>
            </StyledA>
        </StyledMedia>
    </StyledNav>
)
export default Nav;