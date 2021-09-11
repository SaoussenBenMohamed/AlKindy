import React, { Component } from "react"
import Single from "components/blog/Single"
import NavBar from "components/layout/NavBar"

export default class SingleBlog extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Single {...this.props} />
      </>
    )
  }
}
