import React, { Component } from 'react'

import App from '../core/app'

import styles from '../stylesheets/app.scss'  // eslint-disable-line no-unused-vars

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }

    this.data = null
  }

  getData(query) {  // eslint-disable-line no-unused-vars
    this.data = {
      someKey: 'someValue'
    }
  }

  render() {
    return (
      <App active={this.state.active} />
    )
  }
}

export default AppContainer
