import React, {Component} from 'react'
import Pokedex from 'pokedex-promise-v2'

import {config, pathMap} from 'Config/api'
import Footer from 'Components/Footer'
import Header from 'Components/Header'

import styles from 'Stylesheets/app.scss'  // eslint-disable-line no-unused-vars

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      data: {}
    }

    this.apiWrapper = new Pokedex(config)
  }

  normalize(data, pattern) {
    if (typeof data[pattern] !== 'undefined') {
      return data[pattern]
    }

    return data
  }

  componentDidMount() {
    let childrenProps = this.props.children.props
    let params = this.props.params
    let pathName = this.props.location.pathname
    let routePath = childrenProps.route.path
    let normalizePattern = pathMap[routePath].normalizePattern
    let wrapperMethod = pathMap[routePath].wrapperMethod
    let args = []

    this.setState({
      active: true
    })

    if (localStorage.getItem(pathName)) {
      this.setState({
        active: false,
        data: JSON.parse(localStorage.getItem(pathName))
      })

      return
    }

    Object.keys(params).forEach(key => {
      args.push(params[key])
    })

    // console.log('[resolver]', wrapperMethod)
    // console.log('[resolver]', args)

    // call the mapped Pokedex method
    this.apiWrapper[wrapperMethod](...args)
      .then(response => {
        this.setState({
          active: false,
          data: this.normalize(response, normalizePattern)
        })
        localStorage.setItem(pathName, JSON.stringify(this.state.data))
      })
      .catch(error => {
        console.log('There was an ERROR: ', error) // eslint-disable-line no-console
      })
  }

  render() {
    const children = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       data: this.state.data
     })
    )

    let pathName = this.props.location.pathname
    let mainClassName = pathName === '/' ? 'search' : pathName.slice(1).split('/')[0]

    return (
      <div className="container">
        <Header />
        <main className={mainClassName}>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object,
  params: React.PropTypes.object
}

export default App
