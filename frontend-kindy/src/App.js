import React, { Component, Suspense } from "react"
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom"
import uuid from "uuid"
//Package CSS
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "animate.css/animate.min.css"

//Template CSS Style
import "../src/style.css"
import "./assets/css/responsive.css"
import "./assets/css/color/color-red.css"
import "./assets/icofont/icofont.min.css"

const Footer = React.lazy(() => import("./components/layout/Footer"))
const ScrollUpBtn = React.lazy(() => import("./components/layout/ScrollUp"))
const Home = React.lazy(() => import("./pages/Home"))
const SingleBlog = React.lazy(() => import("./pages/SingleBlog"))
const Clubs = React.lazy(() => import("./pages/vieetudiante/viecampus/Clubs"))
// Esprit
// const MotDuPresident = React.lazy(() => import("./pages/esprit/MotDuPresident"))
const ValeursEcole = React.lazy(() => import("./pages/esprit/ValeursEcole"))
const LePlusDEsprit = React.lazy(() => import("./pages/esprit/LePlusDEsprit"))
const GouvernanceStrategique = React.lazy(() => import("./pages/esprit/GouvernanceStrategique"))
const ServicesEcole = React.lazy(() => import("./pages/esprit/ServicesEcole"))
const PolitiqueQualite = React.lazy(() => import("./pages/esprit/PolitiqueQualite"))
const SalleDePresse = React.lazy(() => import("./pages/esprit/SalleDePresse"))
// Admission
const EspritIngenieur = React.lazy(() => import("./pages/admission/EspritIngenieur"))
const ESB = React.lazy(() => import("./pages/admission/ESB"))
const EspritPrepa = React.lazy(() => import("./pages/admission/EspritPrepa"))
// Formation
// ESB
const InscriptionESB = React.lazy(() => import("./pages/formations/esb/InscriptionESB"))
const PresentationESB = React.lazy(() => import("./pages/formations/esb/PresentationESB"))
const ReglementESB = React.lazy(() => import("./pages/formations/esb/ReglementESB"))
const SpecialitesESB = React.lazy(() => import("./pages/formations/esb/SpecialitesESB"))
// Esprit Ingenieur
const PresentationIngenieur = React.lazy(() => import("./pages/formations/espritingenieur/PresentationIngenieur"))
const LanguesEtDev = React.lazy(() => import("./pages/formations/espritingenieur/LanguesEtDev"))
const SpecialiteEtOptions = React.lazy(() => import("./pages/formations/espritingenieur/SpecialiteEtOptions"))
const StagesIngenieur = React.lazy(() => import("./pages/formations/espritingenieur/StagesIngenieur"))
const CalendrierExamen = React.lazy(() => import("./pages/formations/espritingenieur/CalendrierExamen"))
// Esprit Prepa
const ClasseMPSI = React.lazy(() => import("./pages/formations/espritprepa/ClasseMPSI"))
// Formation Continue
const CoursDuSoir = React.lazy(() => import("./pages/formations/formationcontinue/CoursDuSoir"))
const ExecutiveMBA = React.lazy(() => import("./pages/formations/formationcontinue/ExecutiveMBA"))
// Entreprises
const EspritEntreprise = React.lazy(() => import("./pages/entreprises/EspritEntreprise"))
const FormationCertifiante = React.lazy(() => import("./pages/entreprises/FormationCertifiante"))
const APTIS = React.lazy(() => import("./pages/entreprises/espritlanguagecenter/APTIS"))
const PresentationELC = React.lazy(() => import("./pages/entreprises/espritlanguagecenter/PresentationELC"))
const TEFTFAQ = React.lazy(() => import("./pages/entreprises/espritlanguagecenter/TEFTFAQ"))
// International
const Experience = React.lazy(() => import("./pages/international/Experience"))
const Partenariats = React.lazy(() => import("./pages/international/Partenariat"))
const VenirAEsprit = React.lazy(() => import("./pages/international/VenirAEsprit"))
// RDI
const EspritTech = React.lazy(() => import("./pages/rdi/EspritTech"))
const LesEquipes = React.lazy(() => import("./pages/rdi/LesEquipes"))
const Production = React.lazy(() => import("./pages/rdi/Production"))
// Vie Etudiante
const EspritFondation = React.lazy(() => import("./pages/vieetudiante/rentreescolaire/EspritFondation"))
const LogementRestauration = React.lazy(() => import("./pages/vieetudiante/rentreescolaire/LogementRestauration"))
const EventsPage = React.lazy(() => import("./pages/vieetudiante/viecampus/EventsPage"))
const Infrastructure = React.lazy(() => import("./pages/vieetudiante/viecampus/Infrastructure"))
const CelluleEcoute = React.lazy(() => import("./pages/vieetudiante/CelluleEcoute"))
const PresentationVieEtudiante = React.lazy(() => import("./pages/vieetudiante/PresentationVieEtudiante"))
const ContactEtInfo = React.lazy(() => import("./pages/admission/ContactEtInfo"))
const Procedure = React.lazy(() => import("./pages/admission/Procedure"))
const Search = React.lazy(() => import("./pages/Search"))
//Accueil
const MotDeLaDirection =React.lazy(() => import("./pages/kindy/MotDeLaDirection"))
const HonorisUnitedUniversities =React.lazy(() => import("./pages/kindy/HonorisUnitedUniversities"))
const StructurePedadogique =React.lazy(() => import("./pages/kindy/StructurePedadogique"))
const UnitePedagogiques =React.lazy(() => import("./pages/kindy/UnitePedagogiques"))

const ReglementInterieur =React.lazy(() => import("./pages/kindy/ReglementInterieur"))
const GrilleTarifaire =React.lazy(() => import("./pages/kindy/GrilleTarifaire"))

const ParentsProfesseurs =React.lazy(() => import("./pages/kindy/ParentsProfesseurs"))

const EnseignementaDistance =React.lazy(() => import("./pages/kindy/EnseignementaDistance"))

const Club =React.lazy(() => import("./pages/kindy/Club"))

const Actualites =React.lazy(() => import("./pages/kindy/Actualites"))




export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <section className="route-section">
            <Suspense
              fallback={
                <>
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                  </svg>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: [
                        "   html,body {",
                        "  height: 100%;",
                        "   background-image: linear-gradient(-105deg, #cd2122, #212529) !important;",
                        "}",
                      ].join("\n"),
                    }}></style>
                </>
              }>
              <Switch>
                <Route path="/recherche/:keyword" render={props => <Search key={uuid()} {...props} />} />
                <Route path="/actualite/:id" render={props => <SingleBlog key={uuid()} {...props} />} />
                <Route path="/clubs" render={props => <Clubs {...props} />} />
                {/* <Route path="/esprit/mot-du-president" render={props => <MotDuPresident {...props} />} /> */}
                <Route path="/kindy/esprit/Mot-direction" render={props => <MotDeLaDirection {...props} />} />
                <Route path="/kindy/esprit/honoris-united-universities" render={props => <HonorisUnitedUniversities {...props} />} />
                <Route path="/kindy/pages/StructurePedagogique" render={props => <StructurePedadogique {...props} />} />


                <Route path="/kindy/pages/UnitePedagogique" render={props => < UnitePedagogiques {...props} />} />



                <Route path="/kindy/pages/ReglementInterieur" render={props => < ReglementInterieur {...props} />} />
                <Route path="/kindy/pages/GrilleTarifaire" render={props => < GrilleTarifaire {...props} />} />
                
                <Route path="/kindy/pages/ParentsProfesseurs" render={props => <  ParentsProfesseurs {...props} />} />
               

                <Route path="/kindy/VieEtudiantPrepa/enseignement" render={props => <  EnseignementaDistance {...props} />} />
                
                <Route path="/kindy/pages/Club" render={props => <  Club {...props} />} />


                <Route path="/kindy/pages/Actualites" render={props => <  Actualites {...props} />} />



                <Route path="/esprit/valeurs" render={props => <ValeursEcole {...props} />} />
                <Route path="/esprit/les-plus-esprit" render={props => <LePlusDEsprit {...props} />} />
                <Route path="/esprit/gouvernance/strategique" render={props => <GouvernanceStrategique {...props} />} />
                <Route path="/esprit/gouvernance/services-esprit" render={props => <ServicesEcole {...props} />} />
                <Route path="/esprit/politique-qualite" render={props => <PolitiqueQualite {...props} />} />
                <Route path="/esprit/salle-de-presse" render={props => <SalleDePresse {...props} />} />
                {/* Esprit Routes */}
                {/* Admission Routes */}
                <Route path="/admission/esprit-prepa" render={props => <EspritPrepa {...props} />} />
                <Route path="/admission/esprit-school-of-business" render={props => <ESB {...props} />} />
                <Route path="/admission/esprit-ingenieur" render={props => <EspritIngenieur {...props} />} />
                <Route path="/admission/contact-et-info" render={props => <ContactEtInfo {...props} />} />
                <Route path="/admission/procedure" render={props => <Procedure {...props} />} />
                {/* Admission Routes */}
                {/* Formation Routes*/}
                <Route path="/formation/esb/presentation" render={props => <PresentationESB {...props} />} />
                <Route path="/formation/esb/reglement" render={props => <ReglementESB {...props} />} />
                <Route path="/formation/esb/inscription" render={props => <InscriptionESB {...props} />} />
                <Route path="/formation/esb/specialites" render={props => <SpecialitesESB {...props} />} />
                <Route
                  path="/formation/esprit-ingenieur/presentation"
                  render={props => <PresentationIngenieur {...props} />}
                />
                <Route
                  path="/formation/esprit-ingenieur/calendrier-examens"
                  render={props => <CalendrierExamen {...props} />}
                />
                <Route
                  path="/formation/esprit-ingenieur/langues-dev-personnel"
                  render={props => <LanguesEtDev {...props} />}
                />
                <Route
                  path="/formation/esprit-ingenieur/specialites-et-options"
                  render={props => <SpecialiteEtOptions {...props} />}
                />
                <Route path="/formation/esprit-ingenieur/stages" render={props => <StagesIngenieur {...props} />} />
                <Route path="/formation/espritPrepa/classeMPSI" render={props => <ClasseMPSI {...props} />} />
                <Route
                  path="/formation/formation-continue/cours-du-soir"
                  render={props => <CoursDuSoir {...props} />}
                />
                <Route
                  path="/formation/formation-continue/executiveMBA"
                  render={props => <ExecutiveMBA {...props} />}
                />
                {/* Formation Routes*/}
                {/* Entreprise Routes*/}
                <Route path="/entreprise/Esprit-Language-Center/APTIS" render={props => <APTIS {...props} />} />
                <Route
                  path="/entreprise/Esprit-Language-Center/presentation"
                  render={props => <PresentationELC {...props} />}
                />
                <Route path="/entreprise/Esprit-Language-Center/TEFTFAQ" render={props => <TEFTFAQ {...props} />} />
                <Route path="/entreprise/esprit-entreprise" render={props => <EspritEntreprise {...props} />} />
                <Route path="/entreprise/fondation" render={props => <EspritFondation {...props} />} />
                <Route path="/entreprise/stages" render={props => <StagesIngenieur {...props} />} />
                <Route path="/entreprise/formation-certifiante" render={props => <FormationCertifiante {...props} />} />
                {/* Entreprise Routes*/}
                {/* International Routes*/}
                <Route path="/international/experience" render={props => <Experience {...props} />} />
                <Route path="/international/partenariats" render={props => <Partenariats {...props} />} />
                <Route path="/international/venir-a-esprit" render={props => <VenirAEsprit {...props} />} />
                {/* International Routes*/}
                {/* RDI Routes*/}
                <Route path="/rdi/espri-tech" render={props => <EspritTech {...props} />} />
                <Route path="/rdi/les-equipes-rdi" render={props => <LesEquipes {...props} />} />
                <Route path="/rdi/production" render={props => <Production {...props} />} />
                {/* RDI Routes*/}
                {/* Vie Etudiante Routes*/}
                <Route
                  path="/vie-etudiante/rentree-scolaire/espritfondation"
                  render={props => <EspritFondation {...props} />}
                />
                <Route
                  path="/vie-etudiante/rentree-scolaire/inscription"
                  render={props => <VenirAEsprit {...props} />}
                />
                <Route
                  path="/vie-etudiante/rentree-scolaire/logement-restauration"
                  render={props => <LogementRestauration {...props} />}
                />
                <Route path="/vie-etudiante/vie-campus/clubs" render={props => <Clubs {...props} />} />
                <Route
                  path="/vie-etudiante/vie-campus/evenements-challenges"
                  render={props => <EventsPage {...props} />}
                />
                <Route
                  path="/vie-etudiante/vie-campus/infrastructure"
                  render={props => <Infrastructure {...props} />}
                />
                <Route path="/vie-etudiante/cellule-ecoute" render={props => <CelluleEcoute {...props} />} />
                <Route path="/vie-etudiante/presentation" render={props => <PresentationVieEtudiante {...props} />} />
                {/* Vie Etudiante Routes*/}
                <Route path="/" render={() => <Home />} />
                <Redirect to="/not-found" />
              </Switch>
              <Footer />
              <ScrollUpBtn />
            </Suspense>
          </section>
          {/* </CSSTransition> */}
        </div>
      </BrowserRouter>
    )
  }
}
