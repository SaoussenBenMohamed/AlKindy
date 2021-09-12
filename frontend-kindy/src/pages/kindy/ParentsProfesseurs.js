import React, { Component } from "react"
import { Col, Container, Image, Row , Card} from "react-bootstrap"


import photo1 from "../../assets/img/UnitePedagogiques.PNG"

import NavBar from "components/layout/NavBar"


export default class ParentsProfesseurs extends Component {
  render() {
    return (
      <>
        
      
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                <h1>RENCONTRES PARENTS ENSEIGNANTS</h1>
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



                 
                 
                 
                 
                 
                 
                 
            <div style={{ display: "flow-root" }}>
                  <p>Calendrier :</p>
                  <p>Ces rencontres régulières se tiennent selon le calendrier ci-dessous. Les enseignants rencontrent régulièrement les parents sur rendez vous et en concertation totale dés que le besoin ou la demande se font sentir.</p>
                </div>
                <br />
            
              <Row className="margin-top-60" style={{ justifyContent: "center" }}>
                <ul className="timeline">
                  <li>
                    <div className="direction-r">
                      <div className="flag-wrapper">
                        <span className="flag">Début de l'année </span>
                        <span className="time-wrapper">
                          <span className="time">Début Septembre</span>
                        </span>
                      </div>
                      <div className="desc">
                        
                      Réunion de prérentrée avec la direction
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="direction-l">
                      <div className="flag-wrapper">
                        <span className="flag">Fin Septembre</span>
                        <span className="time-wrapper">
                          <span className="time">2ème étape</span>
                        </span>
                      </div>
                      <div className="desc">
                      Réunion de rentrée avec les enseignants

                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="direction-r">
                      <div className="flag-wrapper">
                        <span className="flag">Janvier</span>
                        <span className="time-wrapper">
                          <span className="time">3ème étape</span>
                        </span>
                      </div>
                      <div className="desc">
                      Rencontre bilan du 1er semestre avec les enseignants
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="direction-l">
                      <div className="flag-wrapper">
                        <span className="flag">Juin</span>
                        <span className="time-wrapper">
                          <span className="time">4ème étape</span>
                        </span>
                      </div>
                      <div className="desc">
                      Rencontre bilan de fin d’année avec les enseignants
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="direction-r">
                      <div className="flag-wrapper">
                        <span className="flag">Fin Juin / Début Juillet</span>
                        <span className="time-wrapper">
                          <span className="time">5ème étape</span>
                        </span>
                      </div>
                      <div className="desc">
                      Rencontre bilan de fin d’année avec le directeur
                      </div>
                    </div>
                  </li>
                </ul>
              </Row>
             
              
                        
                     
                












                 
                 
                 
                 
                 
                 
                 
                
             </div>    
         
        </section>
      </>
     
    )
  }
}


















































