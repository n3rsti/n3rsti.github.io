import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledArrow, StyledArrowIcon, StyledArrowText } from "../../components/arrow/arrow"
import {StyledAbout, StyledIcon} from "./about.style"

let date = new Date()
let time = date.getFullYear() - 2018

const About = () => (
    <StyledSection black auto min id="about-me">
    <StyledIcon className="fas fa-user"></StyledIcon>
    <StyledAbout>Hello, I'M Krzysztof Witucki and I'M learning to become <b>Javascript Developer</b>. I've been coding
      for about {time} year and this is my Portfolio with my own projects. More project you can see
      on my <a href="https://github.com/n3rsti">Github</a>.
      </StyledAbout>
    <StyledArrow href="#stack">
        <StyledArrowText yellow>Skills</StyledArrowText>
        <StyledArrowIcon yellow className="fas fa-arrow-down"></StyledArrowIcon>
      </StyledArrow>
    </StyledSection>
)
export default About