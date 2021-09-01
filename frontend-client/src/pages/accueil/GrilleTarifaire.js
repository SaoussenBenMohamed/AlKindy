import React, { Component } from "react"
import { Col, Container, Image, Row , Card} from "react-bootstrap"
import IconList from "components/IconList"

import photo1 from "../../assets/img/logokindy.PNG"

import NavBar from "components/layout/NavBar"


export default class GrilleTarifaire extends Component {
  render() {
    return (
      <>
        
      
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                <h1>Grille tarifaire POUR LES NOUVEAUX INSCRITS ESPRIT AL-KINDI 2021-2022</h1>
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

        <p style={{fontWeight: 'bold'}}> Frais de scolarité :</p>
             
                 
         
              





<div >
              
                


               

             
               


               
                <Col >
                  
                  <IconList data={ fourthList} />
                  
                </Col>




                
               



                
             
              </div>
            
          </div>
        </section>
      </>
    )
  }
}




























const  fourthList = {

  title: "Modalités de paiement :",
  icon: "icofont-clip",
  list: [
      "Modalités de paiement",
      "1ére tranche avant le 15/09/2021 : 1800 DT.",
      "2éme tranche avant le 31/12/2021 : 1350 DT.",
      "3ème tranche avant le 31/03/2022 : 1350 DT."
,


  ],
}





