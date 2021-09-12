import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../assets/img/vie-etudiant1.jpg"
import photo2 from "../../assets/img/vie-etudiant2.jpg"
import NavBar from "components/layout/NavBar"
import LinkDuo from "components/utils/LinkDuo"
import ReactPlayer from 'react-player'
import VideoHonoris from "pages/kindy/VideoHonoris"

import MetaHelmet from "components/MetaHelmet"

export default class HonorisUnitedUniversities extends Component {

 


  render() {
    return (
      <>
        
        <NavBar />
        <section className="our-blog main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Honoris United Universities</h1>
                  <hr
                    style={{
                      color: "#ed1c24",
                      borderTop: "2px solid",
                      float: "left",
                      width: "100px",
                    }}></hr>
                    
                </Col>
                <p>Honoris United Universities est le premier réseau panafricain d’enseignement supérieur privé engagé à former la nouvelle génération de leaders et de professionnels africains capables d’avoir un impact sur leurs sociétés et leurs économies dans un monde globalisé. Intelligence collaborative, agilité culturelle et mobilité sont au cœur de la vision d’Honoris en matière d’enseignement supérieur.</p>
                <p>Honoris United Universities fusionne les savoirs et l’expertise de ses institutions membres pour développer un capital humain africain de classe mondiale, compétitif sur des marchés de plus en plus numérisés du travail et des start-ups.</p>
              </Row>
            </div>

          
            <div>
              <Row>
                <Col>
                  <h1>Nos Valeurs</h1>
                  <hr
                    style={{
                      color: "#ed1c24",
                      borderTop: "2px solid",
                      float: "left",
                      width: "100px",
                    }}></hr>
                    
                </Col>
               <p> <p style={{fontWeight: 'bold'}}> Intelligence collaborative :</p>L’intelligence collaborative est au cœur de notre vision novatrice de l’enseignement supérieur. Elle permet de fusionner les savoirs et pratiques de plusieurs pays pour former une nouvelle génération de leaders opérationnels, capables de transformer les sociétés et économies de demain. L’intelligence collaborative inspire nos activités et donne tout son sens à notre mission.</p>
              <p><p style={{fontWeight: 'bold'}}> Agilité culturelle :</p>Dans un monde complexe et en perpétuel changement, fait de défis et d’opportunités, nous voulons former des professionnels avec de fortes capacités d’adaptation, de réflexion et d’engagement. Grâce à leur agilité culturelle, notre corps professoral et nos lauréats contribueront à développer l’Afrique et à participer à son rayonnement au niveau régional et international.</p>
              <p><p style={{fontWeight: 'bold'}}> Mobilité :</p>Nous travaillons étroitement avec les employeurs pour cerner leurs besoins. Nous soutenons l’esprit d’entreprise et croyons fermement que les petites et moyennes entreprises jouent un rôle moteur dans les économies du continent Africain. Grâce à la collaboration entre les institutions membres de notre plateforme, nous proposons une offre académique différenciée et adaptés aux besoins du marché. Nous croyons en un « état d’esprit mobile » pour permettre à nos lauréats une employabilité effective à la fois régionale et internationale.</p>
             <p><p style={{fontWeight: 'bold'}}> Excellence académique :</p>Notre engagement à soutenir les aspirations de nos communautés repose sur la base d’un environnement rigoureux selon des standards internationaux précis dont notre corps académique, nos programmes, nos infrastructures et nos résultats se feront l’écho. Nous sommes régulièrement audités par des organismes indépendants qui confirment notre niveau d’exigence élevé.</p>
              <p><p style={{fontWeight: 'bold'}}> Vie Etudiante riche :</p>Nos institutions s’engagent à impliquer l’étudiant dans leur gouvernance et à l’accompagner dans leur développement académique, professionnel et personnel. Interactions directes ou en ligne, espace de vie et de logement, événements, clubs, networking et activités organisées par sur les campus physiques ou digitaux, tout est mis en œuvre pour assurer aux étudiants une expérience des plus riches.</p>
              </Row>
            </div>


            <div>
              <Row>
                <Col>
                  <h1>Chiffres</h1>
                  <hr
                    style={{
                      color: "#ed1c24",
                      borderTop: "2px solid",
                      float: "left",
                      width: "100px",
                    }}></hr>
                    
                </Col>
                <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                    <li>
                    14 institutions d’enseignement supérieur, professionnel et à distance et en ligne
                    </li>
                    <li>+70 campus urbains ou résidentiels et centres d’apprentissage ou en ligne</li>
                    <li>
                    + 57 000 étudiants
                    </li>
                    <li>
                    10 pays africains
                    </li>
                    <li>
                    32 villes
                    </li>
                    <li>
                    +40 nationalités
                    </li>
                    <li>
                    +85 partenariats avec des universités en Europe et aux Etats-Unis
                    </li>
                    <li>
                    Plus de 300 programmes pluridisciplinaires en présentiel ou en ligne dans des domaines tels que la Santé, l’Ingénierie, IT, Business, Droit, Architecture, Arts et Design, Média, Education et Sciences politiques
                    </li>
                  </ul>
              </Row>
            </div>



            <div>
              <Row>
                <Col>
                  <h1>Découvrez Honoris en image</h1>
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
            <VideoHonoris/>
            <br />
                    <br/>
            <div>
              <Row>
                <Col>
                  <h1>Choisir Honoris</h1>
                  <hr
                    style={{
                      color: "#ed1c24",
                      borderTop: "2px solid",
                      float: "left",
                      width: "100px",
                    }}></hr>
                    
                </Col>
             <p>Ambitieux et responsables, les diplômés du réseau Honoris United Universities possèdent un avantage compétitif sur le marché du travail : une expérience académique multiculturelle et une immersion professionnelle panafricaine couplées à une vie étudiante aux standards internationaux.</p>
              <p>Honoris United Universities s’engage envers ses étudiants et leurs familles à travers:</p>
              
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                    <li>
                    Une excellence académique reconnue au niveau national et international
                    </li>
                    <li>Un corps académique issu des meilleurs professeurs locaux et internationaux</li>
                    <li>
                    Des programmes d’échange ou parcours multi-pays en Afrique, en Europe, en Asie ou aux Etats-Unis
                    </li>
                    <li>
                    Des partenariats, des programmes d’échanges, doubles diplômes, avec des institutions et des employeurs en Afrique et à l’international
                    </li>
                    <li>
                    Des programmes en alternance avec l’entreprise
                    </li>
                    <li>
                    Une utilisation pertinente des nouvelles technologies
                    </li>
                    <li>
                    Une agilité culturelle et des best-practices découlant d’une expertise régionale, continentale et internationale
                    </li>
                    <li>
                    Des programmes dédiés pour l’employabilité
                    </li>
                  </ul>
              
              
              </Row>
            </div>



            <div>
              <Row>
                <Col>
                  <h1>Rejoignez la communauté Honoris United sur les plateformes sociales :
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



           







            <div className="col-md-7">
            <div className="social-icons bottom">
              <ul className="list-inline">
                <li>SUIVEZ-NOUS: </li>
                <li>
                  <LinkDuo to= "https://www.facebook.com/HonorisUni/">
                    <i className="icofont-facebook" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to="https://www.instagram.com/honorisuni/">
                    <i className="icofont-instagram" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to="https://twitter.com/HonorisUni">
                    <i className="icofont-twitter" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to="https://www.youtube.com/channel/UC6cNKYe2bBS2jNz00Sqo83Q?view_as=subscriber">
                    <i className="icofont-youtube" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to="https://www.linkedin.com/company/honorisuni/">
                    <i className="icofont-linkedin" />
                  </LinkDuo>
                </li>
              </ul>
            </div>
          </div>


         
                    
                   
           
          </div>
        </section>
      </>
    )
  }
}
