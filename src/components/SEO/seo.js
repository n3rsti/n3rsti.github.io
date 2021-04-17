import React from "react"
import { Helmet } from "react-helmet"
import logo from "../../img/logo.png"

const SEO = () => (
    <Helmet>
        <html lang="en-GB" />
        <meta charSet="utf-8" />
        <meta name="description" content="Python web developer portfolio"/>
        <meta name="google-site-verification" content="3gQS-Jm4jngZiOxDesqjDU_rf6ljjjhKUOfBHgCFiOE" />
        <link rel="icon" href={logo} type="image/gif" sizes="16x16" />
        {/* Logo created with design evo */}
        <script src="https://kit.fontawesome.com/52781d0c34.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <meta name="theme-color" content="#f1c40f"></meta>
        <title>Krzysztof Witucki</title>
    </Helmet>
)
export default SEO;
