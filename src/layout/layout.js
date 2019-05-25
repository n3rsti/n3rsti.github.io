import React from "react"
import { theme } from '../utils/theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import SEO from '../components/SEO/SEO'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
      font-size: 10px;
      scroll-behavior: smooth;
  }
`
const Layout = ({children}) => (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  )
  export default Layout;
  export { GlobalStyle };