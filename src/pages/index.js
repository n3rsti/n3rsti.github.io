import React from "react"
import Layout from "../layout/layout.js"
import Hero from "../templates/hero/hero"
import About from "../templates/about/about"
import Stack from "../templates/stack/stack"
import Work from "../templates/work/work"
import Contact from "../templates/contact/contact"


const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <About></About>
    <Stack></Stack>
    <Work></Work>
    <Contact></Contact>
  </Layout>
  
)

export default IndexPage
