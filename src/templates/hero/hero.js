import React from "react"
import Nav from "../../components/nav/nav"
import { StyledArrow, StyledArrowIcon, StyledArrowText } from "../../components/arrow/arrow"
import { StyledH1, TitleP} from "./hero.style"
import { StyledSection } from "../../components/section/section"



const Hero = () => (
    <StyledSection>
      <StyledH1>
        
        <TitleP>K</TitleP>rzysztof
        <br></br>
        <TitleP>W</TitleP>itucki
    
    </StyledH1>
      <StyledArrow href="#about-me" aria-label="Check informations about me">
        <StyledArrowText> About Me</StyledArrowText>
        <StyledArrowIcon className="fas fa-arrow-down"></StyledArrowIcon>
      </StyledArrow>
      <Nav></Nav>
    </StyledSection>
)
export default Hero