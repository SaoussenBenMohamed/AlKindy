import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import arrowsrc from "../../../assets/img/arrow.ico"
import logement1 from "../../../assets/img/logement1.png"
import logement2 from "../../../assets/img/logement2.png"
import logement3 from "../../../assets/img/logement3.png"
import logement4 from "../../../assets/img/logement4.png"
import logement5 from "../../../assets/img/logement5.png"
import file1 from "../../../assets/files/002_REGLEMENT-INTERIEUR.docx"
import file2 from "../../../assets/files/demande_hebergement.pdf"
import file3 from "../../../assets/files/contrat-de-location-à-usage-dhabitation-BLOC-2-pour-filles.doc"
import file4 from "../../../assets/files/contrat_de_location_foyer-1.docx"
import breadcrumbbg from "../../../assets/img/restauration.png"
import DownloadButton from "components/DownloadButton"
import IconList from "components/IconList"
import InformationBox from "components/InformationBox"
import NavBar from "components/layout/NavBar"
import Foyer from "components/staticgalleries/Foyer"
import LinkDuo from "components/utils/LinkDuo"
import { LogementRestauration as meta } from "../VieEtudianteDictionary"
import MetaHelmet from "components/MetaHelmet"

export default class LogementRestauration extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container space-items">
            <Row style={{ textAlign: "center" }}>
              <h1>
                Ouverture des pré-inscriptions au foyer :<span style={{ color: "#cd1211" }}> 29 Juillet 2020</span>
              </h1>
            </Row>
            <Row style={{ textAlign: "center", justifyContent: "center" }}>
              <p style={{ color: "#cd1211" }}>
                Ouverture des pré-inscriptions au foyer le 29/07/2020, sachant que la capacité d’accueil ne peut
                résorber toutes les demandes. La clôture se fera dès que la capacité d'accueil sera atteinte
              </p>
              <DownloadButton style={{ textAlign: "center" }} data={preinscri} />
            </Row>
            <Row>
              <Col md={9}>
                <div style={{ display: "flow-root" }}>
                  <h3 style={{ color: "#cd2122" }}>Cliquez ici pour réserver (foyer/restaurant)</h3>
                  <hr className="custom-hr" style={{ float: "left" }}></hr>
                </div>
                <p>N.B : Vous devez être inscris à Esprit pour vous identifier.</p>
              </Col>
              <Col>
                <DownloadButton data={reglement} />
              </Col>
            </Row>
            <Row>
              <IconList data={list}></IconList>
            </Row>
            <Row>
              <Col>
                <h1>Restauration et logement</h1>
                <hr
                  style={{
                    color: "#ed1c24",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="quote">
                  ESPRIT dispose au sein du site à Chotrana d’une résidence universitaire pour ses étudiants, d'une
                  capacité limitée.
                </h6>
              </Col>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col>
                <div style={{ display: "flow-root" }}>
                  <h3 style={{ color: "#cd2122" }}>Quand ?</h3>
                  <hr className="custom-hr" style={{ float: "left" }}></hr>
                </div>
                <br />
                <p>
                  La Résidence universitaire accueille les élèves d’Esprit à leur demande et se veut être un cadre
                  assurant le respect de la liberté de chacun tout en permettant à tous de travailler dans les
                  meilleures conditions. L'école dispose également de deux centres de soins médicaux au sein de ses
                  locaux : Bloc D et bloc I.
                </p>
                <p>
                  L’examen des demandes d’hébergement se fait sur la base d’une demande écrite et du dépôt d’un dossier,
                  dans les limites des places disponibles, la priorité étant accordée aux filles.
                </p>
              </Col>
              <Col>
                <Foyer></Foyer>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Grille tarifaire Année universitaire 2019/2020 « Etudiants internationaux»</h1>
                <hr
                  style={{
                    color: "#ed1c24",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Hébergement au Foyer d’ESPRIT</h3>
                <p>
                  Ces frais couvrent les prestations suivantes : logement en chambre double ou triple, un réfrigérateur
                  par binôme, chauffage centrale, accès à l’internet haut débit, ... Une caution d’un montant de 100 €
                  doit être versée en même temps que le premier versement. Elle est restituée à la fin de l’année
                  scolaire si aucun dégât n’a été causé par le résident concerné.
                </p>
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <img src={logement1} style={{ width: "100%" }} alt="tarif foyer international"></img>
            </Row>
            <Row>
              <Col>
                <h3>Restaurant d’ESPRIT</h3>
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <img src={logement2} style={{ width: "100%" }} alt="tarif restaurant international"></img>
            </Row>
            <Row>
              <Col>
                <h1>Grille tarifaire Année universitaire 2019/2020 « Etudiants Tunisiens »</h1>
                <hr
                  style={{
                    color: "#ed1c24",
                    borderTop: "2px solid",
                    float: "left",
                    width: "100px",
                  }}></hr>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Hébergement au Foyer d’ESPRIT</h3>
                <p>
                  Ces frais couvrent les prestations suivantes : logement en chambre double ou triple, un réfrigérateur
                  par binôme, chauffage centrale, accès à l’internet haut débit, ... Une caution d’un montant de 220
                  dinars doit être versée en même temps que le premier versement. Elle est restituée à la fin de l’année
                  scolaire si aucun dégât n’a été causé par le résident concerné.
                </p>
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <img src={logement3} style={{ width: "100%" }} alt="tarif foyer tunisien"></img>
            </Row>
            <Row>
              <Col>
                <h3>Restaurant d’ESPRIT</h3>
                <h3>Paiement par tranche : (Engagement annuel)</h3>
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <img src={logement4} style={{ width: "100%" }} alt="tarif restaurant tunisien tranche"></img>
            </Row>
            <Row>
              <Col>
                <h3>Paiement par mois :</h3>
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <img src={logement5} style={{ width: "100%" }} alt="tarif restaurant tunisien mois"></img>
            </Row>
            <Row>
              <Col>
                <InformationBox data={info} />
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: breadcrumbbg,
  Title: "Logement Et Restauration",
  Subtitle: "Logement Et Restauration",
}
const preinscri = {
  link: "https://esprit-tn.com/FoyerResEsp/login/Inscription",
  text: "pré-inscription",
  src: arrowsrc,
}
const reglement = {
  link: file1,
  text: "ICI",
  src: arrowsrc,
}
const list = {
  icon: "icofont-clip",
  title: "Demande d'hébergement",
  description: [
    "ATTENTION: Le dossier ne sera traité qu'à partir de la date d'inscription",
    <br />,
    <b>Pièces à fournir :</b>,
  ],
  list: [
    "1 Photo d'identité,",
    "2 Copies CIN ou passeport,",
    "Attestation d'inscription ( à Esprit ou à Esprit prépa),",
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file2}>
      Demande d'hébergement
    </LinkDuo>,
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file3}>
      Contrat à usage d'habitation (Bloc 2 pour filles)
    </LinkDuo>,
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file4}>
      Contrat de location meublée (Bloc 1 foyer Esprit) (Signé)
    </LinkDuo>,
    "Certificat médical, ",
    "Caution d'un montant de 220 DT.",
  ],
}

const info = {
  title: "Pour plus de renseignements:",
  subtitle: "",
  description: ["Appelez le 70 250 014", <br />, "ou e-mail: contact@esprit.tn"],
}
