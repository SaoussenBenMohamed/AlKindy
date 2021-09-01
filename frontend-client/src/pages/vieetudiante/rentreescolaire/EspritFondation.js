import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import fondation from "../../../assets/img/fondation.jpg"
import NavBar from "components/layout/NavBar"
import LinkDuo from "components/utils/LinkDuo"
import { EspritFondation as meta } from "../VieEtudianteDictionary"
import MetaHelmet from "components/MetaHelmet"

export default class EspritFondation extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container space-items">
            <Row>
              <Col>
                <h1>FONDATION ESPRIT</h1>
                <hr
                  style={{
                    color: "#cd2122",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="quote">
                  La Fondation Esprit : Une initiative citoyenne au service des étudiants brillants
                </h6>
              </Col>
            </Row>

            <Row style={{ display: "block", textAlign: "center" }}>
              <img style={{ width: "100%" }} src={fondation} alt="ESPRIT Fondation"></img>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <h3 style={{ color: "#cd2122" }}>L’INSTAURATION D’UNE ÉGALITÉ DES CHANCES ENTRE LES ÉTUDIANTS</h3>
                <p>
                  Crée en 2015 et issue d’un engagement social d’une équipe d’acteurs de la société civile
                  (universitaires, experts, promoteurs…). La Fondation Esprit consolide son engagement pour la
                  transmission des savoirs, de l’égalité des chances et de la mobilité sociale.
                </p>
                <p>
                  La Fondation veille à ce que les étudiants méritant l’accès aux études supérieures privées et de
                  qualité issus de milieux modestes peuvent poursuivre leurs études auprès de l’Ecole Supérieure Privée
                  d’Ingénierie et de technologies.
                </p>
              </Col>
              <Col md={6} xs={12}>
                <h3 style={{ color: "#cd2122" }}>LA FONDATION : UN EFFORT SOLIDAIRE DANS UN ESPRIT DE FAMILLE</h3>
                <p>
                  La Fondation a décidé de mettre en œuvre un ensemble de solutions de financement pour assurer la
                  continuité et l’efficacité de ses interventions.
                </p>
                <p>
                  En plus de la contribution de l’université Esprit au budget de la Fondation à hauteur de 40%, un
                  ensemble de mécanismes a été mis en place pour réussir un projet d’avenir pour la Tunisie. La
                  Fondation est financée par des contributions des particuliers, secteur privé et autres bailleurs de
                  fond.
                </p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <h3 style={{ color: "#cd2122" }}>COMMENT NOUS SOUTENIR</h3>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>
                  E-mail :
                  <LinkDuo to={"mailto:contact@esprit-fondation.tn"} rel="noopener noreferrer" target="_blank">
                    contact@esprit-fondation.tn
                  </LinkDuo>
                </strong>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>RIB: 07 035 0020105509853 95</strong>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>IBAN : TN59 0703 5002 0105 5098 5395</strong>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  }
}
