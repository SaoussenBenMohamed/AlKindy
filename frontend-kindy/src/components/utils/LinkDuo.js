import React, { Component } from "react"
import { Link } from "react-router-dom"
import { isExternal } from "./isExternal"

export default class LinkDuo extends Component {
  render() {
    return isExternal(this.props.to) ? (
      <a href={this.props.to} target="_blank" rel="noopener noreferrer" {...this.props}>
        {this.props.children}
      </a>
    ) : (
      <Link to={this.props.children} {...this.props}>
        {this.props.children}
      </Link>
    )
  }
}
