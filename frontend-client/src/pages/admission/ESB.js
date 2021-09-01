import PropTypes from "prop-types"
import React, { Component } from "react"
import NavBar from "components/layout/NavBar"

export default class ESB extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="bread-cumbs-area bread-cumbs-bg">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1>Esprit School Of Business</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

//Props Types
ESB.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
