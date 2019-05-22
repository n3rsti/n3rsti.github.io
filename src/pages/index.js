import React from "react"
import Layout from "../layout/layout.js";
import StyledSection from "../components/yellowSection/yellowSection"
import Title from "../components/styled-title/styled-title"
import Nav from "../components/nav/nav"
import Arrow from "../components/arrow/arrow"


const IndexPage = () => (
  <Layout>
    <StyledSection>
      <Title></Title>
      <Arrow></Arrow>
      <Nav></Nav>
    </StyledSection>
  </Layout>
  
)

export default IndexPage
