import React from "react"
import { StyledSection } from "../../components/section/section"
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
                <StyledSkillIcon className="fab fa-bootstrap"></StyledSkillIcon>
                <StyledSkillTitle>Bootstrap</StyledSkillTitle>
            </StyledSkillsDiv>
            <StyledSkillsDiv>
                <StyledSkillIcon className="fas fa-code-branch"></StyledSkillIcon>
                <StyledSkillTitle>Git + GitHub</StyledSkillTitle>
            </StyledSkillsDiv>
            <StyledSkillsDiv>
                <StyledSkillIcon className="fab fa-python"></StyledSkillIcon>
                <StyledSkillTitle>Python + Django</StyledSkillTitle>
            </StyledSkillsDiv>

        </StyledSkills>
        <StyledSectionTitle>Learning</StyledSectionTitle>
        <StyledSkills>
            <StyledSkillsDiv>
                <StyledSkillIcon className="fas fa-database"></StyledSkillIcon>
                <StyledSkillTitle>MySQL</StyledSkillTitle>
            </StyledSkillsDiv>

        </StyledSkills>
        <StyledSectionTitle marginBot>Other Skills</StyledSectionTitle>
        <StyledSkillTitle>Jira / Asana basics</StyledSkillTitle>
        <StyledSkillTitle>Linux desktop</StyledSkillTitle>
        <StyledSkillTitle>Linux server basics</StyledSkillTitle>
        <StyledSkillTitle>Websockets (django channels)</StyledSkillTitle>
        <StyledSkillTitle>HTTP Basics</StyledSkillTitle>
        <StyledSkillTitle>Gitflow</StyledSkillTitle>
        <StyledSkillTitle marginBot>Security basics</StyledSkillTitle>

    </StyledSection>
)
export default Stack