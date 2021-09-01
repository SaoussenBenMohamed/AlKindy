import React, { Component } from "react"
import { Col, Container, Image, Row , Card} from "react-bootstrap"
import IconList from "components/IconList"

import photo1 from "../../assets/img/logokindy.PNG"

import NavBar from "components/layout/NavBar"


export default class ReglementInterieur extends Component {
  render() {
    return (
      <>
        
      
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                <h1>RÈGLEMENT INTÉRIEUR</h1>
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

        <p style={{fontWeight: 'bold'}}> Le règlement intérieur est un contrat clair en matière de droits et d'obligations liant l'élève et sa famille à l'école</p>
         <p>Il a pour but d'assurer le bon fonctionnement de l'établissement et la sécurité des personnes qui le côtoient.</p>     
                 
         
              


           <div>   
         <div style={{ display: "flow-root" }}>
                    <h3 style={{ color: "#cd2122" }}>L'inscription à l'école vaut acceptation de ce règlement et des principes fondamentaux sur lesquels il s'appuie qui sont :</h3>
                    <hr className="custom-hr" style={{ float: "left" }}></hr>
                    <br />
                    <br/>
                    </div>

                    <ul style={{ listStyleType: "circle" , marginLeft: "40px"  }}>
                    <li>
                    Neutralité politique et idéologique
                    </li>


<li>Tolérance et respect d'autrui</li>
<li>Respect des biens appartenant aux individus ou à la collectivité.</li>

                    </ul>
                    <p>Toute inscription à l'école vaut adhésion au présent règlement et constitue un contrat de vie scolaire.</p>


                    </div> 



<div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                


               

              <Col md={6} xs={10}>
                  
                  <IconList data={firstList} />
                  
                </Col>

                <Col md={6} xs={10}>
                  
                  <IconList data={secondList} />
                  
                </Col>


                <Col md={6} xs={10}>
                  
                  <IconList data={thirdList} />
                  
                </Col>
                <Col md={6} xs={10}>
                  
                  <IconList data={ fourthList} />
                  
                </Col>




                <Col md={6} xs={10}>
                  
                  <IconList data={EList} />
                  
                </Col>
                <Col md={6} xs={10}>
                  
                  <IconList data={ DList} />
                  
                </Col>



                
              </Row>
              </div>
            
          </div>
        </section>
      </>
    )
  }
}





const firstList = {

  title: "A. Admission et inscription :",
  icon: "icofont-clip",
  description:"Les enfants dont l'état de santé et de maturation physiologique et psychologique est compatible avec la vie collective en milieu scolaire peuvent être admis à l'école primaire Al-Kindy en préscolaire ou en cycle primaire de base (de la 1ere la 6eme). L'inscription est enregistrée par le directeur de l'école sur présentation d'une fiche d'état civil, d'un certificat médical, d'un document de santé attestant que l'enfant a subi les vaccinations obligatoires pour son âge ou justifie d'une contre-indication. Le directeur de l'école est responsable de la tenue du registre des élèves inscrits. Il veille à l'exactitude et à l'actualisation des renseignements qui figurent sur ce document. L'admission est prononcée dans la limite des places disponibles"
  
}















const secondList = {

  title: "B. Fréquentation et obligation scolaires:",
  icon: "icofont-clip",
  list: [
    "Fréquentation :L'inscription à l'école implique l'engagement, pour la famille, d'une fréquentation régulière indispensable pour le développement de la personnalité de l'enfant et pour l'acquisition des apprentissages et compétences définis par les programmes de l'école. Cet engagement est expressément rappelé aux familles par le directeur lors de l'inscription, au début de chaque année scolaire et en tant que de besoin. A défaut d'une fréquentation régulière, et en cas d'absences prolongées non justifiées, l'enfant peut être radié des effectifs de l'école. La radiation est prononcée par le directeur après avis du Conseil des maîtres. Une notification écrite est adressée à la famille après information de la délégation régionale de l'éducation.",
    "Absences :Les absences sont consignées, chaque demi-journée, dans un registre d'appel tenu par la maîtresse. Les parents sont priés de prévenir l'école en cas d'absence de leur enfant. Un certificat médical est souhaité.",
    "Horaires et aménagement du temps scolaire :L'accueil des élèves a lieu le matin de 7h50 à 8h et l'après-midi de 13h20 à 13h30. Aucun enfant ne sera accueilli en dehors de ces horaires. Les horaires de sortie sont de 12h à 12h10 et de 16h00 à 16h10. En cas de retards répétés, un courrier sera adressé à la famille. Conformément à la réglementation nationale, La durée hebdomadaire de la scolarité à l'école élémentaire est fixée à 22 heures. La classe a lieu les lundis, mardis, mercredi (1/2 journée), jeudis et vendredi de 8h à 16h",
    ,
  ],
}


const thirdList = {

  title: "C. Vie scolaire :",
  icon: "icofont-clip",
  description:"A l'école où se retrouvent tous les enfants, sans aucune discrimination, l'exercice de la liberté de conscience, dans le respect de chacun, impose que l'ensemble de la communauté éducative vive à l'abri de toute pression idéologique ou religieuse. L'école joue un rôle primordial dans la socialisation de l'enfant : tout doit être mis en oeuvre pour que son épanouissement y soit favorisé. Les activités scolaires sont gratuites. Les activités exceptionnelles ne doivent pas avoir un caractère discriminatoire. Les membres de l'équipe pédagogique s'interdisent tout comportement, geste ou parole qui traduirait indifférence ou mépris à l'égard de l'élève ou de sa famille, ou qui serait susceptible de blesser la sensibilité des enfants. De même, les élèves, comme leurs familles, doivent s'interdire tout comportement, geste ou parole qui porterait atteinte à la fonction ou à la personne du maître et au respect dû à leurs camarades ou aux familles de ceux-ci. Tout châtiment corporel est interdit. Il est recommandé de marquer les affaires au nom de l'enfant. L'école ne serait être tenue responsable des pertes ou dégradations survenues aux vêtements, bijoux ou objets apportés par les enfants à l'école.",

}




const  fourthList = {

  title: "D. Usage des locaux. Hygiène et sécurité :",
  icon: "icofont-clip",
  list: [
"Utilisation des locaux — responsabilité : L'ensemble des locaux scolaires est confié au directeur, responsable de la sécurité des personnes et des biens.",
"Hygiène : Les élèves accueillis à l'école doivent être en état de santé et de propreté satisfaisant. Les parents doivent veiller à la propreté et à la bonne tenue vestimentaire de leurs enfants. Ils sont, en outre, encouragés par l'équipe pédagogique à la pratique quotidienne de l'ordre et de l'hygiène. Le problème des poux est récurrent d'année en année. Il s'agit pour tous de surveiller la chevelure de son enfant et de traiter si besoin. Les enseignants se réservent le droit de refuser un enfant maladif (fièvre, diarrhée...). Il est rappelé que tout médicament est interdit à l'école.",

"Disposition particulière : Les jouets et objets dangereux apportés de la maison sont strictement interdits. Les bijoux et les objets de valeur sont également à éviter. La responsabilité de l'école ne pourra être mise en cause en cas de perte, de détérioration ou d'accident. Les chaussures ouvertes au talon et non attachées à la cheville (tongs, mules) sont interdites à l'école."

    ,


  ],
}





const EList = {

  title: "E. Accueil et sortie des élèves:",
  icon: "icofont-clip",
  description:"Les enfants sont remis, par les représentants légaux ou les personnes qui les accompagnent, soit au service d'accueil, soit au personnel enseignant chargé de la surveillance. Ils sont repris, à la fin de chaque demi-journée, par les représentants légaux ou par toute personne nommément désignée par eux par écrit. Les enseignants se réservent le droit de demander une pièce d'identité aux personnes qu'ils ne connaissent pas. L'exclusion temporaire d'un enfant, peut être prononcée par le directeur, après avis du conseil d'école, en cas de négligence répétée ou de mauvaise volonté évidente des représentants légaux pour reprendre leur enfant à la sortie de chaque classe, aux heures fixées par le règlement intérieur."
}
const DList = {

  title: "D. Usage des locaux. Hygiène et sécurité :",
  icon: "icofont-clip",
  description:"Nous rappelons que les enseignants restent à disposition des parents pour discuter et résoudre d'éventuels problèmes relatifs à leur enfant, en demandant un rendez-vous. Le directeur d'école, responsable du dialogue avec les familles, facilite les contacts jugés utiles par les enseignants ou demandés par les familles."
}