import React from "react"
import { Col, Row } from "react-bootstrap"
import Club from "components/blog/Club"
import NavBar from "components/layout/NavBar"
import { useApi } from "../../../hooks/useApi"
import { Clubs as meta } from "../VieEtudianteDictionary"
import MetaHelmet from "components/MetaHelmet"

export default function Clubs() {
  const [clubs] = useApi("clubs")

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col>
              <h1>Clubs ESPRIT</h1>
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
                  Au sein d’Esprit, les associations et clubs remplissent plusieurs rôles étant donné la diversité des
                  motivations qui animent ceux qui en sont à l’origine. Conscients de l’importance de la vie
                  associative, les étudiants jouent un rôle important dans l’élaboration et la transmission des messages
                  aux destinataires.
                </p>
                <p>
                  <strong>Ci-dessous la liste des clubs d’Esprit. N’hésitez pas à la compléter.</strong>
                </p>
              </Col>
            </Row>
          </div>
          {clubs && <Club data={clubs} />}
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "Nos clubs",
  Subtitle: "Découvrez les clubs d'ESPRIT",
}
