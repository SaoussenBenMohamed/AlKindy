import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"

import breadcrumbbg from "../../assets/img/esprit-tech-pres.png"
import corpsEnseignant from "../../assets/img/esprit-tech.png"
import ImageBox from "components/ImageBox"
import NavBar from "components/layout/NavBar"
import { EspritTech as meta } from "./RDIDictionary"
import MetaHelmet from "components/MetaHelmet"

export default class EspritTech extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Esprit-Tech : Département de Recherche Développement Innovation</h1>
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
            <Row>
              <ImageBox data={corps} />
            </Row>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-flash" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <div className="services-box-desc">
                        <p>
                          Consciente de l’importance d’avoir un corps enseignant permanent pour dispenser un
                          enseignement de qualité et de l’importance de la recherche dans l’évolution du niveau
                          scientifique et technologique des enseignants, Esprit a inscrit, dès sa création en 2003, la
                          mission de recherche au cœur de ses objectifs. Un département de Recherche-Développement-
                          Innovation (RDI) nommé Esprit-Tech fut créé depuis 2010. Esprit-Tech accorde beaucoup
                          d’importance à la recherche appliquée et innovante pouvant avoir des retombés
                          socio-économiques sans pour autant délaisser la recherche fondamentale et publiante. Ainsi la
                          recherche à Esprit-Tech admet plusieurs composantes : Veille technologique, Maîtrise de la
                          technologie, recherche appliquée et innovante, valorisation transfert et dissémination du
                          savoir et du savoir-faire.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-bullseye" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Missions d’Esprit-Tech</h4>
                      <div className="services-box-desc">
                        <p>Esprit-Tech a pour missions :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">
                            Offrir au corps enseignant un cadre pour mener des activités de RDI,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Former les futurs formateurs par la recherche et l’innovation,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Anticiper les besoins des entreprises,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Offrir aux entreprises une nouvelle génération d’ingénieurs capables de mener et d’encadrer
                            des projets en RDI,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Encourager la création et l’incubation de Startups,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Favoriser les partenariats avec les entreprises et les laboratoires de recherche,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Encourager le transfert technologique vers les entreprises.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-library" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Thématiques de recherche</h4>
                      <div className="services-box-desc">
                        <p>Les différentes thématiques sont :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">Développement mobile,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Communications sans fils, </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Réseaux et internet du futur,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Informatique ambiante et embarquée,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Informatique des objets et réseaux de capteurs,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Virtualisation et Cloud computing,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Mathématiques appliquées et calcul scientifique,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Calcul des risques via des contrôles stochastiques,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Robotique, </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Analyse des données dans les réseaux sociaux,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Pilotage intelligent de systèmes industriels,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Systèmes d’information et systèmes décisionnels,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Images et vision, </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">Innovation pédagogique. </span>
                        </li>
                      </ul>
                    </div>
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

const breadcrumb = {
  src: breadcrumbbg,
  Title: "Esprit-Tech",
  Subtitle: "Recherche, Développement et Innovation",
}
const corps = {
  src: corpsEnseignant,
  alt: "Corps Enseignant ESPRIT",
  title: "Corps Enseignant ESPRIT",
  text: "",
}
