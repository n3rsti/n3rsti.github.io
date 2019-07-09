import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledWorkTitle, StyledInWork, StyledWorkA, StyledFirstWork, StyledSecWork, StyledThirdWork } from "./work.style"
const FirstWork = () => (
    <StyledFirstWork>
        <StyledWorkTitle className="work-title">MacOS</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://n3rsti.github.io/MacOS-Template/" target="_blank" aria-label="Live macOS Template">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/MacOS-Template" target="_blank" aria-label="macOS code">Code</StyledWorkA>
        </StyledInWork>
    </StyledFirstWork>
)
const SecWork = () => (
    <StyledSecWork>
        <StyledWorkTitle className="work-title">Kalkulator Ocen</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://n3rsti.github.io/SchoolGradeCalculator/" target="_blank" aria-label="Live School Grade Calculator">Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/SchoolGradeCalculator" target="_blank" aria-label="School Grade Calculator code">Code</StyledWorkA>
        </StyledInWork>
    </StyledSecWork>
)
const ThirdWork = () => (
    <StyledThirdWork>
        <StyledWorkTitle className="work-title" yellow>time.js</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://www.npmjs.com/package/time-pack.js" target="_blank" aria-label="time-pack.js package on npm website">NPM</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/time.js" target="_blank" aria-label="time-pack.js code">Code</StyledWorkA>
        </StyledInWork>
    </StyledThirdWork>
)
const FourthWork = () => (
    <StyledThirdWork>
        <StyledWorkTitle className="work-title" yellow>Weather Web</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA href="https://github.com/n3rsti/Weather-Web-Django" target="_blank" aria-label="Web weather code">Code</StyledWorkA>
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