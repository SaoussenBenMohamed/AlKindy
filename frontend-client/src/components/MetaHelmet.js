import React from "react"
import { Helmet } from "react-helmet"
export default function MetaHelmet({ meta }) {
  return (
    <Helmet>
      <title>Esprit - {meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </Helmet>
  )
}
