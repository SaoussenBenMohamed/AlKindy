import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../assets/img/vie-etudiant1.jpg"
import photo2 from "../../assets/img/vie-etudiant2.jpg"
import NavBar from "components/layout/NavBar"
import LinkDuo from "components/utils/LinkDuo"
import ReactPlayer from 'react-player'
import VideoEnseignementD from "pages/kindy/VideoEnseignementD"

import MetaHelmet from "components/MetaHelmet"

export default class EnseignementaDistance extends Component {

 


  render() {
    return (
      <>
        
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          

          
         

<div>
           
                    
               <VideoEnseignementD/>
               
              

         
                    
                   
           
          </div>
        </section>
      </>
    )
  }
}
