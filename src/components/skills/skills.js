import styled from "styled-components"
import React from "react"

const StyledSkills = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 15vh;
`
const StyledSkillsDiv = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
    margin: 5px 20px 5px 20px;
`
const StyledSkillTitle = styled.h3`
    color: ${({ theme }) => theme.colors.black};
    margin-top: 3px;
    font-size: 1.4rem;
    margin-bottom: ${props => props.marginBot ? '15vh' : '0'};
`
const StyledSkillIcon = styled.i`
    font-size: 5rem;
`

const Skills = () => (
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
)
export { Skills, StyledSkillTitle };