import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => (
    <Helmet>
        <html lang="en-GB" />
        <meta charSet="utf-8" />
        <meta name="description" content="My personal portfolio"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <title>Krzysztof Witucki</title>
    </Helmet>
)
export default SEO;