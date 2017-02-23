import React, { Component } from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'  // eslint-disable-line no-unused-vars

import Search from '../components/Search'
import Detail from '../components/Detail'
import layout from '../core/layout'

class App extends Component {
  constructor(props) {
    super(props)

    this.setDecoratedComponents()
  }

  setDecoratedComponents() {
    this.decoratedComponents = {}

    let componentsList = [
      Search,
      Detail
    ]

    componentsList.forEach(Component => {
      this.decoratedComponents[Component.name] = layout(Component)
      //this.decoratedComponents[Component.name].displayName = `Decorated${Component.name}`  // just for more friendly debugging, no functionality case here
    })
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={this.decoratedComponents.Search} />
        <Route path='/detail/:name' component={this.decoratedComponents.Detail} />
      </Router>
    )
  }
}

export default App
