import React from "react"
import { Col, Row } from "react-bootstrap"
import RDI from "components/blog/RDI"
import NavBar from "components/layout/NavBar"
import { useApi } from "../../hooks/useApi"
import { LesEquipes as meta } from "./RDIDictionary"
import MetaHelmet from "components/MetaHelmet"

export default function LesEquipes() {
  const [rdis] = useApi("rdis")

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col>
              <h1>Les équipes de recherche</h1>
              <hr
                style={{
                  color: "#ed1c24",
                  borderTop: "2px solid",
                  float: "left",
                  width: "100px",
                }}></hr>
            </Col>
          </Row>
          <div className="margin-top-60">
            <Row>
              <Col className="space-items">
                <p>
                  Au sein d’Esprit, les associations et rdis remplissent plusieurs rôles étant donné la diversité des
                  motivations qui animent ceux qui en sont à l’origine. Conscients de l’importance de la vie
                  associative, les étudiants jouent un rôle important dans l’élaboration et la transmission des messages
                  aux destinataires.
                </p>
              </Col>
            </Row>
          </div>
          {rdis && <RDI data={rdis} />}
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "Nos rdis",
  Subtitle: "Découvrez les rdis d'ESPRIT",
}
