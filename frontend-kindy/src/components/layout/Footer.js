import React from "react"

import LinkDuo from "../utils/LinkDuo"

export default function Footer() {
  //Default Props
  const props = {
    copyrightText: "2020 © All Rights Reserved. Created By ",
    createdBy: "ESPRIT",
    socialTitle: "SUIVEZ-NOUS:",
    FacebookLink: "https://www.facebook.com/ecolealkindyespriteducation",
  TwitterLink: "https://twitter.com/EspritEducation",
  YoutubeLink: "https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA",
  LinkedinLink: "https://www.linkedin.com/company/esprit_2/",
    linkedinLink: "/#0",
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <p className="copyright">
              {props.copyrightText}
              <span style={{ color: "white", fontWeight: "500" }}>{props.createdBy}</span>
            </p>
          </div>
          <div className="col-md-7">
            <div className="social-icons bottom">
              <ul className="list-inline">
                <li>{props.socialTitle} </li>
                <li>
                  <LinkDuo to={props.FacebookLink}>
                    <i className="icofont-facebook" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.TwitterLink}>
                    <i className="icofont-twitter" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.YoutubeLink}>
                    <i className="icofont-youtube" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.linkedinLink}>
                    <i className="icofont-linkedin" />
                  </LinkDuo>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
