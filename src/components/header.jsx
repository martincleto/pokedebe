
import React, { Component } from 'react'

// require('../stylesheets/header.scss')

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header><h1 className="heading heading--level-1">Pokédebe</h1></header>
    )
  }
}

export default Header
