import $ from "jquery"
import React, { Component } from "react"
import LinkDuo from "../utils/LinkDuo"
import SearchModal from "./SearchModal"
export default class NavMenu extends Component {
  componentDidMount() {
    var size

    //SMALLER HEADER WHEN SCROLL PAGE
    function smallerMenu() {
      var sc = $(window).scrollTop()
      if (sc > 40) {
        $("#header-sroll").addClass("small")
      } else {
        $("#header-sroll").removeClass("small")
      }
    }

    // VERIFY WINDOW SIZE
    function windowSize() {
      size = $(document).width()
      if (size >= 991) {
        $("body").removeClass("open-menu")
        $(".hamburger-menu .bar").removeClass("animate")
      }
    }

    // ESC BUTTON ACTION
    $(document).keyup(function (e) {
      if (e.keyCode === 27) {
        $(".bar").removeClass("animate")
        $("body").removeClass("open-menu")
        $("header .desk-menu .menu-container .menu .menu-item-has-children a ul").each(function (index) {
          $(this).removeClass("open-sub")
        })
      }
    })

    $("#cd-primary-nav > li").hover(function () {
      let $whidt_item = $(this).width()
      $whidt_item = $whidt_item - 8

      // let $prevEl = $(this).prev("li")
      // let $preWidth = $(this)
      //   .prev("li")
      //   .width()
      let pos = $(this).position()
      pos = pos.left + 4
      $("header .desk-menu .menu-container .menu>li.line").css({
        width: $whidt_item,
        left: pos,
        opacity: 1,
      })
    })

    // ANIMATE HAMBURGER MENU
    $(".hamburger-menu").on("click", function () {
      $(".hamburger-menu .bar").toggleClass("animate")
      if ($("body").hasClass("open-menu")) {
        $("body").removeClass("open-menu")
      } else {
        $("body").toggleClass("open-menu")
      }
    })

    $("header .desk-menu .menu-container .menu .menu-item-has-children ul").each(function (index) {
      $(this).append('<li class="back"><a href="#">Retour</a></li>')
    })

    // RESPONSIVE MENU NAVIGATION
    $("header .desk-menu .menu-container .menu .menu-item-has-children > a").on("click", function (e) {
      e.preventDefault()
      if (size <= 991) {
        $(this).next("ul").addClass("open-sub")
      }
    })

    $(".logo-adn a").on("click", function (e) {
      if (size <= 991) {
        $(".bar").removeClass("animate")
        $("body").removeClass("open-menu")
        $("header .desk-menu .menu-container .menu .menu-item-has-children a ul").each(function (index) {
          $(this).removeClass("open-sub")
        })
      }
    })

    // RESPONSIVE MENU NAVIGATION
    $(
      "header .desk-menu .menu-container .menu .menu-item-has-children > ul > li:not(.menu-item-has-children):not(.back) > a"
    ).on("click", function (e) {
      if (size <= 991) {
        $(".bar").removeClass("animate")
        $("body").removeClass("open-menu")
        $("header .desk-menu .menu-container .menu .menu-item-has-children a ul").each(function (index) {
          $(this).removeClass("open-sub")
        })
      }
    })

    $("header .desk-menu .menu-container .menu .menu-item-has-children ul .back").on("click", function (e) {
      e.preventDefault()
      $(this).parent("ul").removeClass("open-sub")
    })

    $("body .over-menu").on("click", function () {
      $("body").removeClass("open-menu")
      $(".bar").removeClass("animate")
    })

    $(document).ready(function () {
      smallerMenu()
      windowSize()
      $("body").removeClass("open-menu")
    })

    $(window).scroll(function () {
      smallerMenu()
    })

    $(window).resize(function () {
      windowSize()
    })
  }
  render() {
    return (
      <>
        <div className="over-menu"></div>
        <div id="wrap">
          <header className="header" id="header-sroll">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="address-bar">
                    <ul
                      className="list-inline header-admission-start"
                      style={{ textAlign: "center", color: "white", display: "none" }}>
                      <li>
                        OUVERTURE DES INSCRIPTIONS AUX CONCOURS D'ADMISSION TRÈS PROCHAINEMENT
                        {/* <LinkDuo style={{ color: "black" }} to={"/admission/esprit-ingenieur"}>
                          <b>&nbsp;INSCRIVEZ VOUS ICI</b>
                        </LinkDuo> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="desk-menu">
                    <nav className="box-menu">
                      <div className="menu-container">
                        <div className="menu-head">
                          <a href="/" target="_blank" className="client">
                            <span>Bienvenue à ESPRIT</span>
                          </a>
                        </div>
                        <div className="menu-header-container">
                          <div className="logo">
                            <h1 className="logo-adn">
                              <LinkDuo title="ESPRIT" to="/">
                                ESPRIT
                              </LinkDuo>
                            </h1>
                          </div>


                           








                          <ul id="cd-primary-nav" className="menu">
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">ACCUEIL</LinkDuo>
                              <ul className="sub-menu">
                                {/* <li className="menu-item">
                                  <LinkDuo to="/esprit/mot-du-president">Mot du président</LinkDuo>
                                </li> */}
                                <li className="menu-item">
                                  <LinkDuo to="/kindy/esprit/Mot-direction">Mot De La direction</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/kindy/esprit/honoris-united-universities">Honoris United Universities</LinkDuo>
                                </li>
                                
                                
                                
                              </ul>
                            </li>
                            
                              
                                <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/StructurePedagogique">STRUCTURE PÉDAGOGIQUE</LinkDuo>
                                </li>
                             
                                {/* <li className="menu-item">
                                  <LinkDuo to="/admission/esprit-school-of-business">Esprit School Of Business</LinkDuo>
                                </li> */}
                             
                             <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/UnitePedagogique">UNITÉS PÉDAGOGIQUES</LinkDuo>
                                </li>





                               
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">RÈGLEMENT ET TARIF</LinkDuo>
                              <ul className="sub-menu">
                                
                                <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/ReglementInterieur">RÈGLEMENT INTÉRIEUR</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/GrilleTarifaire">GRILLE TARIFAIRE</LinkDuo>
                                </li>
                                
                                </ul>
                                </li>
                                
                                
                              

                                <li className="menu-item">
                                  <LinkDuo to="/kindy/VieEtudiantPrepa/enseignement">Enseignement à Distance</LinkDuo>
                                </li>



                                <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/Club">Club</LinkDuo>
                                </li>




                                
                            
                            







                                <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/ParentsProfesseurs">Parents-Professeurs</LinkDuo>
                                </li>


                                <li className="menu-item">
                                  <LinkDuo to="/kindy/pages/Actualites">Actualités et environnements</LinkDuo>
                                </li>
                            
                            <li className="contact menu-item ">
                              <SearchModal />
                            </li>
                            <li className="line"></li>
                          </ul>
                          
                        </div>
                      </div>
                      <div className="hamburger-menu">
                        <div className="bar"></div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    )
  }
}
