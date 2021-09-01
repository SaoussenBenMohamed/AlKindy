import React from "react"
import Contact from "components/home/Contact"
import Calendar from "components/sections/Calendar"
// import About from "components/About"
import News from "components/home/News"
// import FAQ from "components/FAQ"
import Partner from "components/home/Partner"
import Services from "components/home/Services"
import Slider from "components/home/Slider"
import Credits from "components/home/Credits"
import Video from "components/home/Video"
import Videok from "components/home/Videok"
import Testimonials from "components/home/Testimonials"
// import VideoArea from "components/home/VideoArea"
import NavBar from "components/layout/NavBar"
import { Helmet } from "react-helmet"
export default function HomeOne() {
  return (
    <>
      <Helmet>
        <title>Esprit - Se former autrement</title>
        <meta
          name="description"
          content="Bienvenue à ESPRIT! Se former autrement, la seule école d'ingénieurs en tunisie qui appartient aux associations CGE, CDIO, AUF et UNESCO et ayant aussi l'acréditation EUR-ACE"
        />
        <meta name="keywords" content="esprit, université, université tunisie, ingénieurie, cycle ingénieur" />
      </Helmet>
      <NavBar pageName="home" />
      <Slider />
      <Credits />
      <Video />
      <Videok/>
     
      <News />
     
      
      {/* <About /> */}
      {/* <VideoArea /> */}
     
      {/* <FAQ /> */}
      <Contact />
    </>
  )
}
