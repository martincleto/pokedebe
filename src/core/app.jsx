import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Search} />
        <Route path='/detail/:name' component={Detail} />
      </Router>
    )
  }
}

const Search = () => <p>Search</p>
const Detail = () => <p>Detail</p>

export default App
