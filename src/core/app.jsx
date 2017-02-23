import React, { Component } from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'  // eslint-disable-line no-unused-vars

import Search from 'Components/Search'
import Detail from 'Components/Detail'
import layout from 'Core/layout'

class App extends Component {
  constructor(props) {
    super(props)

    this.setDecoratedComponents()
  }

  setDecoratedComponents() {
    this.decoratedComponents = {}

    let componentsList = [ // @TODO find a non-hardcoding way to fetch the components list
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
