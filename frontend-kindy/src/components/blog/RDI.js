import React from "react"
import { Col, Row } from "react-bootstrap"
import IconList from "components/IconList"
import { compareValues } from "../utils/compareByField"
import LinkDuo from "../utils/LinkDuo"

export default function RDI({ data }) {
  const rdisData = data.sort(compareValues("createdAt", "asc")).map(ev => {
    const members = {
      icon: "icofont-people",
      title: "Les membres",
      description: "L'équipe " + ev.title + " est composée de :",
      list: ev.members || [],
    }
    return (
      <Row style={{ marginBottom: "60px" }} key={ev._id}>
        <Col md={6} xs={12}>
          <div style={{ display: "flow-root" }}>
            <h3 style={{ color: "#cd2122" }}>
              {ev.url ? (
                <LinkDuo style={{ color: "#cd2122" }} to={ev.url}>
                  {ev.title}
                </LinkDuo>
              ) : (
                ev.title
              )}
            </h3>
            <hr className="custom-hr" style={{ float: "left" }}></hr>
          </div>

          {ev.description &&
            ev.description.split("\n").map(i => {
              return <p style={{ textAlign: "justify" }}>{i}</p>
            })}
        </Col>
        <Col md={6} xs={12}>
          <IconList data={members} />
        </Col>
      </Row>
    )
  })

  //BlogPost loop END
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">{rdisData}</div>
        </div>
      </div>
    </>
  )
}
