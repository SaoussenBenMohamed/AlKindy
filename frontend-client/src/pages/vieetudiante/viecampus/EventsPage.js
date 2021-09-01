import React from "react"
import { Col, Row } from "react-bootstrap"
import BlogPost from "components/blog/BlogPost"
import NavBar from "components/layout/NavBar"
import { EventsPage as meta } from "../VieEtudianteDictionary"
import MetaHelmet from "components/MetaHelmet"

export default function EventsPage() {
  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog main-blog dynamic-margin-no-bg">
        <div className="container">
          <div>
            <Row>
              <Col>
                <h1>Evénements et Challenges</h1>
                <hr
                  style={{
                    color: "#ed1c24",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
          </div>

          <div className="margin-top-60">
            <Row style={{ marginBottom: "60px" }}>
              <Col className="space-items">
                <h4 style={{ color: "#ed1c24" }}>Les événements</h4>

                <p>
                  Etre étudiant c’est aussi partager des moments conviviaux et festifs au sein de la communauté
                  Espritienne. Chaque semaine, une pléiade d’événements (musicaux, écologiques etc) est organisée par
                  les étudiants et leurs enseignants pour enrichir l’atmosphère de l’école et continuer de rayonner tant
                  sur l’aspect académique que sur l’aspect culturel. Parmi les évènements les plus répandus à ESPRIT,
                  nous citons :
                </p>
              </Col>
            </Row>
          </div>
          <BlogPost />
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "Nos actualités et événements",
  Subtitle: "Restez à la une des nouvelles d'ESPRIT",
}
