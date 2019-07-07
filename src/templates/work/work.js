import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledWorkTitle, StyledInWork, StyledWorkA, StyledFirstWork, StyledSecWork, StyledThirdWork } from "./work.style"
const FirstWork = () => (
    <StyledFirstWork>
        <StyledWorkTitle className="work-title">MacOS</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://n3rsti.github.io/MacOS-Template/" aria-label="Live macOS Template">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/MacOS-Template" aria-label="macOS code">Code</StyledWorkA>
        </StyledInWork>
    </StyledFirstWork>
)
const SecWork = () => (
    <StyledSecWork>
        <StyledWorkTitle className="work-title">Kalkulator Ocen</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://n3rsti.github.io/SchoolGradeCalculator/" aria-label="Live School Grade Calculator">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/SchoolGradeCalculator" aria-label="School Grade Calculator code">Code</StyledWorkA>
        </StyledInWork>
    </StyledSecWork>
)
const ThirdWork = () => (
    <StyledThirdWork>
        <StyledWorkTitle className="work-title" yellow>time.js</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://www.npmjs.com/package/time-pack.js" aria-label="time-pack.js package on npm website">NPM</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/time.js" aria-label="time-pack.js code">Code</StyledWorkA>
        </StyledInWork>
    </StyledThirdWork>
)
const FourthWork = () => (
    <StyledThirdWork>
        <StyledWorkTitle className="work-title" yellow>Weather Web</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/Weather-Web-Django" aria-label="Web weather code">Code</StyledWorkA>
        </StyledInWork>
    </StyledThirdWork>
)
const Work = () => (
    <StyledSection black auto row center id="work">
      <FirstWork></FirstWork>
      <SecWork></SecWork>
      <ThirdWork></ThirdWork>
      <FourthWork></FourthWork>
    </StyledSection>
)
export default Work