import styled from "styled-components"
import React from "react"
import macos from "../../img/macos.png"
import calc from "../../img/calc.png"

const StyledWork = styled.div`
    width: 220px;
    height: 150px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f1c40f;
    position: relative;
    background-size: cover;
    background-position: center;
    margin: 20px;
    cursor: pointer;
    flex-wrap: wrap;

    :hover .work-items {
        transform: scale(1);
    }
    :hover .work-title {
        transform: scale(0);
    }
`
const StyledWorkTitle = styled.h3`
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
    transition: .3s;
    color: ${ props => props.yellow ? props.theme.colors.yellow : props.theme.colors.black};
    font-weight: 900;
    z-index: 2;
`
const StyledInWork = styled.div`
    width: 40%;
    height: 30%;
    background: #f1c40f;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: .3s;
    border-radius: 3px;
    will-change: transform;
    position: relative;
    z-index: 100;
    overflow: hidden;
`
const StyledWorkA = styled.a`
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
    padding: 50%;
`
const BottomStyle = {
    margin: 'auto auto 25% auto'
  };
const StyledFirstWork = styled(StyledWork)`
    background: url(${macos}) no-repeat center;
    background-size: cover;
`
const StyledSecWork = styled(StyledWork)`
    background: url(${calc}) no-repeat center;
    background-size: cover;
`
const StyledThirdWork = styled(StyledWork)`
    background: ${({ theme }) => theme.colors.black};
`
const FirstWork = () => (
    <StyledFirstWork>
        <StyledWorkTitle className="work-title">MacOS</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA >Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA>Code</StyledWorkA>
        </StyledInWork>
    </StyledFirstWork>
)
const SecWork = () => (
    <StyledSecWork>
        <StyledWorkTitle className="work-title">Kalkulator Ocen</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA >Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA>Code</StyledWorkA>
        </StyledInWork>
    </StyledSecWork>
)
const ThirdWork = () => (
    <StyledThirdWork style={BottomStyle}>
        <StyledWorkTitle className="work-title" yellow>time.js</StyledWorkTitle>
        <StyledInWork className="work-items">
            <StyledWorkA >Live</StyledWorkA>
        </StyledInWork>
        <StyledInWork className="work-items">
            <StyledWorkA>Code</StyledWorkA>
        </StyledInWork>
    </StyledThirdWork>
)

export {FirstWork, SecWork, ThirdWork};