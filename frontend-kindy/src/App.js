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
