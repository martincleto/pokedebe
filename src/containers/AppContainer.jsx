import React, { Component } from 'react'

import App from '../core/App'

require('../stylesheets/app.scss')

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
