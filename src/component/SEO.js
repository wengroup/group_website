import React from "react"
import { Helmet } from "react-helmet"

const Seo = () => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title="Wen Group">
      <meta name="description" content="This is the Wen Group website" />
    </Helmet>
  )
}

export default Seo
