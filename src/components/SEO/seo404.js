import React from "react"
import { Helmet } from "react-helmet"
import logo from "../../img/logo.png"

const SEO = () => (
    <Helmet>
        <html lang="en-GB" />
        <meta charSet="utf-8" />
        <meta name="description" content="404"/>
        <link rel="icon" href={logo} type="image/gif" sizes="16x16" />
        {/* Logo created with design evo */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <title>404</title>
    </Helmet>
)
export default SEO;