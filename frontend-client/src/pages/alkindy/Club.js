import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../assets/img/vie-etudiant1.jpg"
import photo2 from "../../assets/img/vie-etudiant2.jpg"
import NavBar from "components/layout/NavBar"
import LinkDuo from "components/utils/LinkDuo"
import ReactPlayer from 'react-player'
import Clubgalleries from "pages/alkindy/Clubgalleries"


import MetaHelmet from "components/MetaHelmet"

export default class Club extends Component {

 


  render() {
    return (
      <>
        
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          

          
         

        <div className="container">
          <Row>
            <Col>
              <h1>LES CLUBS</h1>
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
                Afin de répondre aux besoins éducatifs, culturels, artistiques de chaque enfant, nous mettons à leur disposition un espace éducatif où chacun s’épanouira grâce a des moyens didactiques modernes, attractifs et motivants, et grâce à un large éventail d’activités :
                </p>
                <ul style={{ listStyleType: "circle" , marginLeft: "40px" }}>
                    <li>
                    Club de Bricolage
                    </li>
                    <li>
                    Club de Danse
                    </li>

<li>
Club d'Origami
</li>
<li>Club d'Arts Plastiques

</li>
<li>Club de Football</li>
<li>Club d'échecs</li>
<li>Club de Musique
</li>
<li>Club d'Informatique</li>
<li>Club de Sciences</li>






<Clubgalleries/>

                    </ul>
              </Col>
            </Row>
          </div>
          </div>
          </section>

      </>
    )
  }

}