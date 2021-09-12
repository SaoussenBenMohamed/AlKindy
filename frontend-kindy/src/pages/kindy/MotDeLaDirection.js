import React, { Component } from "react"
import { Col, Container, Image, Row , Card} from "react-bootstrap"


import photo1 from "../../assets/img/taher- belakhdar.PNG"

import NavBar from "components/layout/NavBar"


export default class MotDeLaDirection extends Component {
  render() {
    return (
      <>
        
      
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Mot de la direction</h1>
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
                <Col>
                
                  <p>
                  "Bienvenue sur le site d’Esprit AL-KINDI où vous trouverez, je l’espère,l’ensemble des informations que vous êtes venus y chercher."
                  </p>
                  <Col md={6}>
                  <Row>
                    <Card style={{ width: "80rem" }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                  </Row>
                  <br />
                    <br/>  
                </Col>
                  <p>Chers élèves, chers parents, chers partenaires, Conscient de l’importance de la communication dans notre mission, nous avons créé cet espace pour vous tenir informés des nouveautés et pour partager ensemble les moments forts de vie et de travail de nos élèves et de nos équipes. Vous trouveriez également toutes les informations utiles pour le bon suivi de la vie et de la scolarité de vos enfants au sein de notre établissement. Nous tenons à mettre ce projet commun de la communication au centre de nos efforts. La réussite de tous nos élèves et leur épanouissement devra nous garder et renforcer notre investissement à tous les niveaux pour faire de ce pôle une référence et de nos élèves des acteurs éduqués aux valeurs citoyennes auxquelles nous croyons tous. Tel est l’objectif qui nous unit et nous mettrons ensemble tous les moyens nécessaires à son accomplissement.</p>
                  <p>Nous nous attachons à la qualité des résultats de nos élèves aux résultats aux différents concours, la neuvième et l’anticipé du bac français cette année, la première promotion de bac tunisien l’an prochain et la première promotion de sixième dans deux ans.</p>
             <p>Nos efforts vont également vers l’amélioration continue de la qualité de vie de nos élèves et leur épanouissement à travers les activités artistiques et culturelles régulières ainsi que la contribution de toutes les associations comme les Youths, les Bills offrent à nos jeunes une formation inégalée qui les prépare pour une vie de citoyens actifs, entrepreneurs et capables de relever les défis.</p>
             
                </Col>
                
                
                
              </Row>
              
             
             
            </div>
          </div>
        </section>
      </>
     
    )
  }
}
