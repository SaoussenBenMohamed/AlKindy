import PropTypes from "prop-types"
import React, { Component } from "react"

import "../../assets/css/menu.css"
import LinkDuo from "../utils/LinkDuo"
import HeaderBar from "./headerBar"
import NavMenu from "./NavBarMenu"

export default class NavBar extends Component {
  render() {
    const breadcrumb = this.props.breadcrumb
    return (
      <>
        <div>
          {/* Start Top Header */}
          <div className="header-fill">
            <HeaderBar breadcrumb={breadcrumb} />
          </div>

          <div className="fade-header"></div>
          <div className="top-header">
            <div className="container">
              <div className="row white-line top-header-hide-mobile">
                <div className="col-md-7 col-lg-7">
                  <div className="address-bar">
                    <ul className="list-inline">
                      <li>
                        <LinkDuo to={this.props.mailLink}>
                          <i className="icofont-email" /> {this.props.mail}
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.numberLink}>
                          <i className="icofont-ui-call" /> {this.props.Number}
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.contactLink}>
                          <i className="icofont-ui-feedback" /> {this.props.contactLink}
                        </LinkDuo>
                      </li>




                    </ul>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5">
                  <div className="social-icons">
                    <ul className="list-inline">
                      <li>
                        <LinkDuo to={this.props.facebookLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-facebook" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.twitterLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-twitter" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.youtubeLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-youtube" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.linkedinLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-linkedin" />
                        </LinkDuo>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row white-line">
                <div className="col-md-12 col-lg-12">
                  <div className="address-bar">
                    <ul className="list-inline header-admission-start" style={{ textAlign: "center", color: "white" }}>
                      <li>
                        
                        {/* <LinkDuo style={{ color: "white" }} to={"/admission/esprit-ingenieur"}>
                          <b>&nbsp;INSCRIVEZ VOUS ICI</b>
                        </LinkDuo> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Top Header */}
          <NavMenu></NavMenu>
        </div>
      </>
    )
  }
}
//Props Types
NavBar.propTypes = {
  mailLink: PropTypes.string,
  mail: PropTypes.string,
  numberLink: PropTypes.string,
  Number: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  youtubeLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  MainLogo: PropTypes.string,
  Logo2: PropTypes.string,
}

//Default Props
NavBar.defaultProps = {
  MainLogo: require("../../assets/img/logo-esprit.png"),
  Logo2: require("../../assets/img/logo2.png"),
  mailLink: "mailto:contact@esprit.tn",
  mail: "khaoula.jomni@esprit.tn",
  numberLink: "callto:0021670250000",
  Number: " 00216 95 981 368",
  facebookLink: "https://www.facebook.com/ecolealkindyespriteducation",
  twitterLink: "https://twitter.com/EspritEducation",
  youtubeLink: "https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA",
  linkedinLink: "https://www.linkedin.com/company/esprit_2/",
}
