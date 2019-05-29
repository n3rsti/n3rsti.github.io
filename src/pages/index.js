
import React from "react"
import Layout from "../layout/layout.js";
import {StyledSection, StyledSectionTitle} from "../components/section/section"
import Title from "../components/styled-title/styled-title"
import Nav from "../components/nav/nav"
import { StyledArrow, StyledArrowIcon, StyledArrowText } from "../components/arrow/arrow"
import StyledIcon from "../components/bigIcon/bigIcon"
import StyledAbout from "../components/about-me/about-me"
import { Skills, StyledSkillTitle } from "../components/skills/skills"
import {FirstWork, SecWork, ThirdWork} from "../components/work/work"

let date = new Date()
let time = date.getFullYear() - 2018

const IndexPage = () => (
  <Layout>
    <StyledSection>
      <Title></Title>

      <StyledArrow href="#about-me">
        <StyledArrowText> About Me</StyledArrowText>
        <StyledArrowIcon className="fas fa-arrow-down"></StyledArrowIcon>
      </StyledArrow>

      <Nav></Nav>
    </StyledSection>

    <StyledSection black auto id="about-me">
    <StyledIcon className="fas fa-user"></StyledIcon>
    <StyledAbout>Hello, I'M Krzysztof Witucki and I'M learning to become <b>Javascript Developer</b>. I've been coding
      for about {time} year and this is my Portfolio with my own projects.</StyledAbout>
    <StyledArrow href="#stack">
        <StyledArrowText yellow>Skills</StyledArrowText>
        <StyledArrowIcon yellow className="fas fa-arrow-down"></StyledArrowIcon>
      </StyledArrow>
    </StyledSection>

    <StyledSection auto id="stack">
      <StyledSectionTitle>Skills</StyledSectionTitle>
      <Skills></Skills>
      <StyledSectionTitle marginBot>Other Skills</StyledSectionTitle>
      <StyledSkillTitle>Jira / Asana</StyledSkillTitle>
      <StyledSkillTitle>Gatsby</StyledSkillTitle>
      <StyledSkillTitle marginBot>Styled Components</StyledSkillTitle>
      
    </StyledSection>
    <StyledSection black auto id="work">
      <FirstWork></FirstWork>
      <SecWork></SecWork>
      <ThirdWork></ThirdWork>
    </StyledSection>
  </Layout>
  
)

export default IndexPage
