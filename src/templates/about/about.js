import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledArrow, StyledArrowIcon, StyledArrowText } from "../../components/arrow/arrow"
import {StyledAbout, StyledIcon} from "./about.style"

let date = new Date()
let time = date.getFullYear() - 2018
let content;
if(time > 1){
  content = time + "years"
}
else {
  content = time + "year"
}

const About = () => (
    <StyledSection black auto min="true" id="about-me">
    <StyledIcon className="fas fa-user"></StyledIcon>
    <StyledAbout>Hello, I'M Krzysztof Witucki and I'M learning to become <b>Python Developer</b>. I've been coding
      for about {content} year mainly in web technologies and <b>Python</b> and this is my Portfolio with my own projects. More project you can see
      on my <a href="https://github.com/n3rsti" target="_blank" aria-label="Check out my github profile" title="Github profile">Github</a>.
      </StyledAbout>
    <StyledArrow href="#stack" aria-label="My proggraming skills section" title="Technology stack">
        <StyledArrowText yellow>Skills</StyledArrowText>
        <StyledArrowIcon yellow className="fas fa-arrow-down"></StyledArrowIcon>
      </StyledArrow>
    </StyledSection>
)
export default About