import React from "react"
import {StyledSection} from "../../components/section/section"
import StyledSectionTitle from "../../components/section-title/section-title"
import { StyledSkills, StyledSkillsDiv, StyledSkillTitle, StyledSkillIcon } from "./stack.style"

const Stack = () => (
    <StyledSection auto id="stack">
      <StyledSectionTitle>Skills</StyledSectionTitle>
      <StyledSkills>
        <StyledSkillsDiv>
            <StyledSkillIcon className="fab fa-html5"></StyledSkillIcon>
            <StyledSkillTitle>HTML</StyledSkillTitle>
        </StyledSkillsDiv>
        <StyledSkillsDiv>
            <StyledSkillIcon className="fab fa-css3-alt"></StyledSkillIcon>
            <StyledSkillTitle>CSS</StyledSkillTitle>
        </StyledSkillsDiv>
        <StyledSkillsDiv>
            <StyledSkillIcon className="fab fa-js"></StyledSkillIcon>
            <StyledSkillTitle>Javascript</StyledSkillTitle>
        </StyledSkillsDiv>
        <StyledSkillsDiv>
            <StyledSkillIcon className="fab fa-react"></StyledSkillIcon>
            <StyledSkillTitle>React</StyledSkillTitle>
        </StyledSkillsDiv>
        <StyledSkillsDiv>
            <StyledSkillIcon className="fas fa-code-branch"></StyledSkillIcon>
            <StyledSkillTitle>Git + GitHub</StyledSkillTitle>
        </StyledSkillsDiv>
    </StyledSkills>
      <StyledSectionTitle marginBot>Other Skills</StyledSectionTitle>
      <StyledSkillTitle>Jira / Asana</StyledSkillTitle>
      <StyledSkillTitle>Gatsby</StyledSkillTitle>
      <StyledSkillTitle marginBot>Styled Components</StyledSkillTitle>
      
    </StyledSection>
)
export default Stack