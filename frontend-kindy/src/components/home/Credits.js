import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import OwlCarousel from "react-owl-carousel"
import CDIO from "../../assets/img/CDIO.png"
import CGE from "../../assets/img/CGE.png"
import AUF from "../../assets/img/AUF.png"
import EURACE from "../../assets/img/EURACE.png"
import UNESCO from "../../assets/img/unesco.png"
import LinkDuo from "../utils/LinkDuo"
import { Row, Col } from "react-bootstrap"

export default function Partners() {
  return (
    <>
      <section className="our-partners ptb-top-100 ptb-bot-50">
        <div className="container" style={{ paddingBottom: "50px!important" }}>
          <Row>
            <Col lg={{ size: 8 }} className="text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>Accréditations</h2>
                  <p>
                    En plus d’être habilitée par le Ministère de l’Enseignement Supérieur et de la Recherche
                    Scientifique tunisien, la qualité de l’enseignement Esprit a été reconnue internationalement.
                  </p>
                  <span className="section-title-bg">Accréditations</span>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col style={{ display: "flex", placeContent: "center" }}>
              <LinkDuo
                to="https://www.cti-commission.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-preview">
                <img src={EURACE} style={{ width: "100%" }} alt="EURACE" />
              </LinkDuo>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
            <Col lg={{ size: 8 }} className="text-center">
              <div className="section-title">
                <h2 style={{ textTransform: "none" }}>Membre de ces associations</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <OwlCarousel
              className="owl-theme partners-slides"
              dots={false}
              loop={false}
              margin={100}
              autoplay={false}
              smartSpeed={1000}
              nav={false}
              navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}
              responsive={{
                0: { items: 1, nav: true },
                768: {
                  items: 2,
                  nav: true,
                },
                1200: {
                  items: 4,
                },
              }}>
              <div className="slider-accredit">
                <LinkDuo
                  to="http://www.cge.asso.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <img src={CGE} alt="CGE" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.cti-commission.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <img src={CDIO} alt="CDIO" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo to="https://www.auf.org/" target="_blank" rel="noopener noreferrer" className="logo-preview">
                  <img src={AUF} alt="AUF" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://en.unesco.org/sites/default/files/list-unesco-chairs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <img src={UNESCO} alt="UNESCO" />
                </LinkDuo>
              </div>
            </OwlCarousel>
          </Row>
        </div>
      </section>
    </>
  )
}
