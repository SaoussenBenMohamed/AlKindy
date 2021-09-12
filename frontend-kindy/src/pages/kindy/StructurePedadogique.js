import React, { Component } from "react"
import { Col, Container, Image, Row , Card} from "react-bootstrap"


import photo1 from "../../assets/img/logokindy.PNG"

import NavBar from "components/layout/NavBar"


export default class StructurePedadogique extends Component {
  render() {
    return (
      <>
        
      
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                <h1>STRUCTURE PÉDAGOGIQUE</h1>
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
                    <br/>>

        <p style={{fontWeight: 'bold'}}> Dans notre établissement, nous suivons le programme éducatif dicté par le ministère tunisien de l'enfance.</p>
         <p>Nous nous inspirons aussi des modèles des grandes institutions de la petite enfance dans le monde. Notre objectif est d'aider chaque enfant à devenir autonome et s'approprier des connaissances et des compétences. Le jeu est considéré comme un moyen privilégié permettant à l'enfant de s'épanouir. Chaque enfant étant unique, nous respectons son rythme et ses besoins. L'enfant ne doit jamais subir le poids de l'apprentissage. L'acquisition des connaissances se fera naturellement à travers le jeu, avec plaisir et dans la bonne humeur. Nous travaillons avec des thèmes touchant la vie quotidienne des enfants. Il en va de même pour l'acquisition des concepts mathématiques, de l'écriture et la lecture.</p>
         <p>Notre établissement est trilingue : l'anglais est inclus dans notre programme aussi bien que le français et l'arabe. En effet, nous sommes conscients qu'une exposition précoce aux connaissances favorisera les apprentissages les plus complexes dans le futur.</p>
          <p style={{fontWeight: 'bold'}}> Notre programme se structure autour de notions allant des plus simples aux plus complexes :</p>       
                 
          <div style={{ display: "flow-root" }}>
                    <h3 style={{ color: "#cd2122" }}>Vivre avec les autres :</h3>
                    <hr className="custom-hr" style={{ float: "left" }}></hr>
                    <br />
                    <br/>
                    <p>L'enfant apprendra :</p>


                    <ul style={{ listStyleType: "circle" , marginLeft: "40px" }}>
                    <li>
                    ce qui le distingue des autres
                    </li>

<li>
à se faire reconnaître comme une personne
</li>
<li>
à communiquer, prendre la parole et écouter l'autre
</li>
<li>
à vivre avec les autres dans une collectivité organisée par des règles
</li>
<li>
à comprendre ce qu'est le groupe et la place qu'il y occupe
</li>
</ul>

<div style={{ display: "flow-root" }}>
                    <h3 style={{ color: "#cd2122" }}>Agir et s'exprimer avec son corps :</h3>
                    <hr className="custom-hr" style={{ float: "left" }}></hr>
                    <br />
                    <br/>
                    </div>

                    <ul style={{ listStyleType: "circle" , marginLeft: "40px" }}>
                    <li>
                    L'action étant un élément essentiel du développement de l'enfant, celui-ci explore l'espace qui l'entoure, manipule des objets familiers, découvre les possibilités de son corps dans des situations diverses (courir, sauter, grimper, glisser, lancer, se tenir en équilibre...). Il participe aussi à des jeux et des rondes, utilise des objets et matériels variés (ballons, cerceaux, L'expression corporelle, la prise de conscience du rythme font également partie de ce domaine d'activités.
                    </li>
                    </ul>


                    <div style={{ display: "flow-root" }}>
                    <h3 style={{ color: "#cd2122" }}>S'approprier le langage et s'initier au monde de l'écrit :</h3>
                    <hr className="custom-hr" style={{ float: "left" }}></hr>
                    <br />
                    <br/>
                    </div>

                    <ul style={{ listStyleType: "circle" , marginLeft: "40px" }}>
                    <li>
                    Le langage oral est le pivot des apprentissages :
                    </li>
                   
<li>
Les enfants découvrent le fonctionnement et l'importance d'exprimer leurs désirs, émotions et besoins
</li>
<li>Ils comprennent petit à petit le rapport qui existe entre la langue orale et la langue écrite. Le travail sur les sons de la parole,
     l'acquisition de l'alphabet et des gestes de l'écriture préparent l'apprentissage systématique de l'écriture et la lecture qui commencera au cours préparatoire.</li>

</ul>



<div style={{ display: "flow-root" }}>
                    <h3 style={{ color: "#cd2122" }}>Découvrir le monde :
</h3>
                    <hr className="custom-hr" style={{ float: "left" }}></hr>
                    <br />
                    <br/>
                    </div>

                    <ul style={{ listStyleType: "circle" , marginLeft: "40px" }}>
                    <li>
                    L'enfant découvre le monde proche :
                    </li>
                    <li>
                    Il découvre les espaces naturels et humains, les matériaux (bois, pierre, terre...) et les éléments (eau, air...). 
                    </li>
                    <li>
                    Il est sensibilisé aux problèmes de l'environnement, de l'hygiène, de la consommation et de la sécurité.
                    </li>
                    <li>
                    Il prend conscience du temps qui passe : calendriers, repérage d'événements ou traces du passé.
                    </li>
                    <li>
                    Il est sensibilisé au monde de l'image : affiches, photos, vidéo...
                    </li>

</ul>







                  </div> 
                  
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
          </div>
        </section>
      </>
     
    )
  }
}
