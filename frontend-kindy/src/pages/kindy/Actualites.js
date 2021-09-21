import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../assets/img/vie-etudiant1.jpg"
import photo2 from "../../assets/img/vie-etudiant2.jpg"
import NavBar from "components/layout/NavBar"
import LinkDuo from "components/utils/LinkDuo"
import ReactPlayer from 'react-player'
import VideoHonoris from "pages/kindy/VideoHonoris"

import MetaHelmet from "components/MetaHelmet"
import ActEtEven from "pages/kindy/ActEtEven"
import Testimonials from "components/home/Testimonials"
export default class Actualites extends Component {

 


  render() {
    return (
      <>
        
        <NavBar />
        
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Nos Actualités
</h1>
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

          
            <div >
                    <h3 style={{ color: "#cd2122" }}>Les actualités</h3>
                    <p>Vous retrouverez ici toutes les actualités d'ESPRIT AL-KINDY:

</p>


         </div>
                    
















      
                   
           
          </div>
          
        </section>
      </>
    )
  }
}
