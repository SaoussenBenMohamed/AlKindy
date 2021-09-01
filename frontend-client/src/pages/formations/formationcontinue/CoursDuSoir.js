import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import IconList from "components/IconList"
import NavBar from "components/layout/NavBar"

import { CoursDuSoir as meta } from "../FormationsDictionary"
import MetaHelmet from "components/MetaHelmet"

export default class CoursDuSoir extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin-no-bg">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Cours du soir ?</h1>
                  <hr
                    style={{
                      color: "#ed1c24",
                      borderTop: "2px solid",
                      float: "left",
                      width: "100px",
                    }}></hr>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    ESPRIT offre une formation d’ingénieur en cours du soir menant au même diplôme délivré en cours du
                    jour. Cette formation est destinée aux salariés, demandeurs d’emploi ou étudiants ayant au moins une
                    licence et désirant accéder au titre d’ingénieur. Cela permet généralement une évolution de carrière
                    significative, soit dans la même entreprise, soit dans le cadre d’une nouvelle recherche d’emploi.
                    Les objectifs de la formation sont les mêmes que ceux des cours du jour, la pédagogie et le rythme
                    sont adaptés à un public de professionnels.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <IconList data={statistics} />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-ui-calendar" />
                    </div>
                    <h3>Durée</h3>
                    <p>
                      Les études durent quatre ans (3 ans si le candidat est détenteur d’une maîtrise ou d’un master).
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={12} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-clock-time" />
                    </div>
                    <h3>Timing</h3>
                    <p>Les cours ont lieu sur 10 mois tous les soirs de 18h30 à 20h30 et le samedi de 14h à 18h.</p>
                  </div>
                </Col>
                <Col md={4} xs={12} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-login" />
                    </div>
                    <h3>Conditions</h3>
                    <p>
                      Les conditions d’admission sont les mêmes que pour le cycle en cours du jour, donc il s’agit d’une
                      admission sur concours : dossier, tests et entretien de motivation.
                    </p>
                  </div>
                </Col>
                <Col md={4} xs={12} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-dollar" />
                    </div>
                    <h3>Coût</h3>
                    <p>
                      Le coût de la formation est de 5500 D.T. hors TVA par an, mais la formule cours du soir offre la
                      possibilité d’un financement par la ristourne de la TFP pour les entreprises.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const statistics = {
  icon: "icofont-hat",
  title: "Les formations",
  description: "Esprit cours du soir propose 4 formations diplômantes :",
  list: [
    "Informatique (avec trois Options de spécialisation : Business Intelligence, Génie Logiciel, Cloud computing)",
    "Télécommunication",
    "Génie Civil",
    "Génie électro-mécanique.",
  ],
}

const breadcrumb = {
  Title: "Cours du soir",
  Subtitle: "La formation continue",
}
