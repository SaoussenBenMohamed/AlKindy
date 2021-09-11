import React from "react"
import breadcrumbbg from "../../assets/img/img_back_news.jpg"
import NavBar from "components/layout/NavBar"
import Caroussel from "components/sections/Caroussel"
import PressNoFile from "components/sections/PressNoFile"
import { useApi } from "../../hooks/useApi"
import { SalleDePresse as meta } from "./EspritDictionary"
import MetaHelmet from "components/MetaHelmet"

export default function SalleDePresse() {
  const [presses] = useApi("presses")

  const breadcrumb = {
    src: breadcrumbbg,
    Title: "Salle de presse",
    Subtitle: "Brochures et articles",
  }

  function filterByTypeHavingFile(type) {
    return presses && presses.filter(p => p.type === type && p.file)
  }

  const [articles, rapports, brochures, communiques] = [
    filterByTypeHavingFile("article"),
    filterByTypeHavingFile("rapport"),
    filterByTypeHavingFile("brochure"),
    filterByTypeHavingFile("communique"),
  ]

  function filterByTypeNoFile(type) {
    return presses && presses.filter(p => p.type === type && !p.file)
  }

  const [communiquesNoFile] = [filterByTypeNoFile("communique")]

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section id="services" className="services-rdi ptb-100 our-blog main-blog dynamic-margin">
        <div className="container">
          {articles && (
            <Caroussel
              title="Articles"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
              pressData={articles}
            />
          )}
          {brochures && (
            <Caroussel
              title="Brochures"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
              pressData={brochures}
            />
          )}
          {rapports && (
            <Caroussel
              title="Rapports"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
              pressData={rapports}
            />
          )}
          {communiques && (
            <Caroussel
              title="Communiques"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
              pressData={communiques}
            />
          )}
          {communiquesNoFile && <PressNoFile title="Communique :" pressData={communiquesNoFile} />}
        </div>
      </section>
    </>
  )
}
