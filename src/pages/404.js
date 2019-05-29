import React from "react"
import { StyledSection } from "../components/section/section"
import Layout from "../layout/layout"
import SEO from "../components/SEO/seo404"
import styled from "styled-components"

const StyledTitleDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 100px;
`
const StyledInfo = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`
const StyledButton = styled.a`
  color: ${({ theme }) => theme.colors.yellow};
  background: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
`
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledSection>
      <StyledTitleDiv>
        <StyledTitle>404</StyledTitle>
        <StyledInfo>This is not the site you're looking for.</StyledInfo>
        <StyledButton href="./">Go Home</StyledButton>
      </StyledTitleDiv>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
