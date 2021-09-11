import React, { Component } from "react"
import { Col, Container, Image, Row , Card} from "react-bootstrap"


import photo1 from "../../assets/img/UnitePedagogiques.PNG"

import NavBar from "components/layout/NavBar"


export default class UnitePedadogiques extends Component {
  render() {
    return (
      <>
        
      
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                <h1>UNITÉS PÉDAGOGIQUES</h1>
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
<div>
    <Row>
            <Col md={12}>
                  <Row>
                    <Card style={{ width: "80rem" }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                  </Row>
                  
                </Col> 
                </Row>
</div>
<br />
                    <br/>

        <p style={{fontWeight: 'bold'}}> Fort de son expérience du groupe dans la gestion et la réalisation des projets pédagogiques au sein de nos universités Esprit,</p>
         <p>notre établissement opte pour la même stratégie pour le suivi de la formation de nos élèves à travers la mise à l’avant des unités pédagogiques. Cette démarche unique dans le pays donne au travail en équipe toute sa valeur, aux échanges et à la concertation toute leur importance pour la réussite de notre projet éducatif.</p>     
                 
         <div style={{ display: "flow- root" }}>
                    <h3 style={{ color: "#cd2122" }}>Ces unités ont comme prérogatives :</h3>
                    <hr className="custom-hr" style={{ float: "left" }}></hr>
                    <br />
                    <br/>
                   


                    <ul style={{ listStyleType: "circle" , marginLeft: "40px" }}>
                    <li>
                    Valider les programmes, les projets et actions pédagogique à soumettre à la direction.
                    </li>

<li>
Proposer des outils et des dispositifs nécessaires pour la mise en place des programmes d’enseignement de manière optimale et harmonieuse dans toutes les classes.
</li>
<li>
Encadrer les enseignants stagiaires et veiller à la bonne information et intégration des enseignants vacataires et des partenaires externes.
</li>
<li>
Mettre en place tous les documents pédagogiques au sein de l’établissement (fiches pédagogiques, supports, devoirs …).
</li>

</ul>


                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
            </div>     
                 
          </div>
        </section>
      </>
     
    )
  }
}
