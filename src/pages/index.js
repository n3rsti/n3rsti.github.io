
import React from "react"
import Layout from "../layout/layout.js";
import StyledSection from "../components/section/section"
import Title from "../components/styled-title/styled-title"
import Nav from "../components/nav/nav"
import { StyledArrow, StyledArrowIcon, StyledArrowText } from "../components/arrow/arrow"

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
    <StyledSection black id="about-me">
    <StyledArrow>
        <StyledArrowText yellow>Skills</StyledArrowText>
        <StyledArrowIcon yellow className="fas fa-arrow-down"></StyledArrowIcon>
      </StyledArrow>
    </StyledSection>
  </Layout>
  
)

export default IndexPage
