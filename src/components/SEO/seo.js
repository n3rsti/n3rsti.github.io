import React from "react"
import { Helmet } from "react-helmet"
import logo from "../../img/logo.png"

const SEO = () => (
    <Helmet>
        <html lang="en-GB" />
        <meta charSet="utf-8" />
        <meta name="description" content="Python web developer portfolio"/>
        <link rel="icon" href={logo} type="image/gif" sizes="16x16" />
        {/* Logo created with design evo */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <title>Krzysztof Witucki</title>
    </Helmet>
)
export default SEO;