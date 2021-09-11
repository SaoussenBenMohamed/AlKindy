import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
// import alternance from "../../assets/img/alternance2019.jpg"
// import admission from "../../assets/img/admissionathome.png"
// import arrowsrc from "../../assets/img/arrow.ico"
// import file1 from "../../assets/files/grille-tarifaire-2019-2020-Ecole-dingénieurs-TUNISIENS-31-07.pdf"
// import file2 from "../../assets/files/grille-tarifaire-2019-2020-Ecole-dingénieurs-INTERNATIONAL-31-07.pdf"
// import file3 from "../../assets/files/Calendrier-dadmission-définitif_31082019.jpg"
// import file4 from "../../assets/files/reglements_concours-2019-2020.pdf"
// import DownloadButton from "components/DownloadButton"
// import IconList from "components/IconList"
// import LinkDuo from "components/utils/LinkDuo"
import NavBar from "components/layout/NavBar"
import { EspritIngenieur as meta } from "./AdmissionDictionary"
import MetaHelmet from "components/MetaHelmet"

export default class EspritIngenieur extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row className="admission-banner" style={{ display: "flex", placeContent: "center" }}>
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  La page d'admission sera disponible très bientôt.
                </p>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <h1>Admission</h1>
                <hr
                  style={{
                    color: "#ed1c24",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
            <Row style={{ display: "flex", placeContent: "center" }}>
              <Col md={6} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  Pour assurer la sécurité et la santé de chaque candidat,
                  <br /> le concours d'admission se déroulera entiérement en ligne
                </p>
              </Col>
              <Row style={{ display: "flex", placeContent: "center" }}>
                <Col md={6} xs={12}>
                  <img src={admission} alt="ESPRIT altérnance" style={{ width: "100%" }}></img>
                </Col>
              </Row>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col md={8}>
                <div style={{ display: "flow-root" }}>
                  <h3 style={{ color: "#cd2122" }}>Pour s'inscrire au concours :</h3>
                  <hr className="custom-hr" style={{ float: "left" }}></hr>
                </div>
                <br />
                <h3>En 1ère année :</h3>
                <p>être titulaire d'un baccalauréat scientifique, technique ou diplôme équivalent.</p>
                <h3>En 2ème année :</h3>
                <p>
                  être titulaire d'une attestation de réussite en 1ère année prépa ou d'une attestation de réussite en
                  1ère année d'école d'ingénieur (prépa intégrée)
                </p>
                <h3>En 3ème année :</h3>
                <p>être titulaire d'une licence scientifique ou admis au concours national d'ingénieur.</p>
                <h3>En 4ème année :</h3>
                <p>être titulaire d'un master (M1) scientifique ou technique.</p>
                <h3>En 5ème année :</h3>
                <p>être titulaire d'une licence scientifique ou technique (durée des études : 4 ans)</p>
              </Col>
              <Col>
                <div style={{ display: "flow-root" }}>
                  <h3 style={{ color: "#cd2122" }}>Liens Utiles</h3>
                  <hr className="custom-hr" style={{ float: "left" }}></hr>
                </div>
                <br />
                <Row>
                  <Col>
                    <LinkDuo
                      className="custom-button btn width100"
                      rel="noopener noreferrer"
                      target="_blank"
                      to={file1}>
                      <span>Grille Tarifaire Tunisiens</span>
                    </LinkDuo>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <LinkDuo
                      className="custom-button btn width100"
                      rel="noopener noreferrer"
                      target="_blank"
                      to={file2}>
                      <span>Grille Tarifaire internationaux</span>
                    </LinkDuo>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <LinkDuo className="custom-button btn width100" to={"/admission/procedure"}>
                      <span>Financement</span>
                    </LinkDuo>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <LinkDuo className="custom-button btn width100" to={"/specialites"}>
                      <span>A Propos d'ESPRIT</span>
                    </LinkDuo>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <LinkDuo className="custom-button btn width100" to={"/admission/contact-et-info"}>
                      <span>Informations utiles pour les internationaux</span>
                    </LinkDuo>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <LinkDuo
                      className="custom-button btn width100"
                      rel="noopener noreferrer"
                      target="_blank"
                      to={file3}>
                      <span>Calendrier d'admission</span>
                    </LinkDuo>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Formation en alternance</h1>
                <hr
                  style={{
                    color: "#ed1c24",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <Col>
                <img src={alternance} alt="ESPRIT altérnance" style={{ width: "100%", margin: "20px 0" }}></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Ce nouveau parcours concerne uniquement les titulaires d’une licence en informatique ou dans une
                  spécialité apparentée. En effet, ESPRIT vous offre en plus des filières classiques en cours de jour ou
                  cours du soir, la possibilité d’intégrer une formation en alternance avec l’une des entreprises
                  partenaires.
                </p>
                <p style={{ width: "100%" }}>Les candidats retenus dans ce cadre bénéficieront :</p>
                <br />
                <ul style={{ listStyle: "circle", marginLeft: "60px" }}>
                  <li>D’une formation de 4 années, alternée entre ESPRIT et l’entreprise partenaire</li>
                  <li>D’un contrat d’embauche avec l’entreprise partenaire et des avantages conséquents</li>
                  <li>D’une prise en charge des frais de formation par l’entreprise partenaire</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <p>
                  Les intéressés par cette opportunité doivent prendre contact avec l’une des entreprises partenaires
                  par mail [1], en leur envoyant un CV pour l’accomplissement des formalités de recrutement par
                  l’entreprise et l’intégration au programme de formation alternée.
                </p>
                <p>
                  <strong>Adresses de contact des entreprises partenaires :</strong>
                </p>
                <p>
                  <strong> Vermeg :</strong> alternance@vermeg.com
                </p>
                <p>
                  <strong>Avaxia :</strong> alternance@avaxia-group.com
                </p>
                <p>
                  <strong>Be-softilys :</strong> recrutement@be-softylis.tn
                </p>
                <p>
                  <strong>Medianet :</strong> alternance@medianet.com.tn
                </p>
                <p>
                  <strong>Vneuron :</strong> wehire@vneuron.com
                </p>
                <p>
                  <strong>NEOXAM :</strong> tn.recruitment@neoxam.com
                </p>
              </Col>
              <Col md={6} xs={12}>
                <p style={{ width: "100%" }}>Les conditions d’inscription définitives dans ce programme sont :</p>
                <br />
                <ul style={{ listStyle: "numbers", marginLeft: "60px" }}>
                  <li>L’admission académique au concours d’ ESPRIT</li>
                  <li>La signature d’un contrat avec l’entreprise partenaire [2]</li>
                </ul>
                <p>
                  [1] :<strong>Adresses de contact des entreprises partenaires sont indiquées dans l'image.</strong>
                </p>
                <p>
                  [2] :
                  <strong>
                    il est à signaler que le candidat ne peut signer un contrat qu’avec une et une seule entreprise
                    partenaire au risque d’être exclu du programme en alternance. En particulier, tout désistement d’une
                    entreprise au profit d’une autre après la signature du contrat d’embauche n’est pas autorisé.
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <IconList data={deroulement} />
            </Row>
            <Row>
              <Col md={9}>
                <div style={{ display: "flow-root" }}>
                  <h3 style={{ color: "#cd2122" }}>Règlement concours</h3>
                  <hr className="custom-hr" style={{ float: "left" }}></hr>
                </div>
                <p>Pour avoir plus d'informations, veuillez télécharger ce document.</p>
              </Col>
              <Col>
                <DownloadButton data={reglement} />
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <div style={{ display: "flow-root" }}>
                  <h3 style={{ color: "#cd2122" }}>Inscription</h3>
                  <hr className="custom-hr" style={{ float: "left" }}></hr>
                </div>
                <p>
                  <strong>L’inscription au concours est totalement gratuite.</strong>
                </p>
              </Col>
              <Col>
                <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/accueil.aspx"}>
                  <span>Cours du jour (Tunisiens)</span>
                </LinkDuo>
                <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/info.aspx"}>
                  <span>Cours du jour (internationaux)</span>
                </LinkDuo>
                <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/INFOCS.aspx"}>
                  <span>Cours du soir (Tunisiens)</span>
                </LinkDuo>
              </Col>
            </Row> */}
          </div>
        </section>
      </>
    )
  }
}
// const deroulement = {
//   icon: "icofont-hat",
//   title: "Déroulement des épreuves",
//   description: "Les épreuves se déroulent selon le planning suivant :",
//   list: [
//     "Etude de dossier scientifique.",
//     "Test de niveau en langue française.",
//     "Test de niveau en langue anglaise.",
//     "Entretien de motivation avec un jury.",
//   ],
// }
// const reglement = {
//   link: file4,
//   text: "Télécharger",
//   src: arrowsrc,
// }
const breadcrumb = {
  src: "",
  Title: "ESPRIT ÉCOLE D’INGÉNIEURS",
  Subtitle: "Modalités d’Admission",
}
