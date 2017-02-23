import React, { Component } from 'react'

import App from '../core/App'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }

    this.data = null
  }

  getData(query) {
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
