import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledWorkTitle, StyledInWork, StyledWorkA, BottomStyle, StyledFirstWork, StyledSecWork, StyledThirdWork } from "./work.style"
const FirstWork = () => (
    <StyledFirstWork>
        <StyledWorkTitle className="work-title">MacOS</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://n3rsti.github.io/MacOS-Template/">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/MacOS-Template">Code</StyledWorkA>
        </StyledInWork>
    </StyledFirstWork>
)
const SecWork = () => (
    <StyledSecWork>
        <StyledWorkTitle className="work-title">Kalkulator Ocen</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://n3rsti.github.io/SchoolGradeCalculator/">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/SchoolGradeCalculator">Code</StyledWorkA>
        </StyledInWork>
    </StyledSecWork>
)
const ThirdWork = () => (
    <StyledThirdWork style={BottomStyle}>
        <StyledWorkTitle className="work-title" yellow>time.js</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://www.npmjs.com/package/time-pack.js">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/time.js">Code</StyledWorkA>
        </StyledInWork>
    </StyledThirdWork>
)

const Work = () => (
    <StyledSection black auto id="work">
      <FirstWork></FirstWork>
      <SecWork></SecWork>
      <ThirdWork></ThirdWork>
    </StyledSection>
)
export default Work