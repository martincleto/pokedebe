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

  normalize = (pattern, input) => {
    let output = input[pattern] ? input[pattern] : input

    // return always an object
    return (output instanceof Array) ? Object.values(output) : output
  }

  getData = ({location, routePath, params}) => {
    this.setState({
      active: true
    })

    return new Promise((resolve, reject) => {
      let pathName = location.pathname
      let normalizePattern = pathMap[routePath].normalizePattern

      // check if stored
      if (localStorage.getItem(pathName)) {
        // console.info(`restoring ${pathName}`)
        let normalizedData = this.normalize(normalizePattern, JSON.parse(localStorage.getItem(pathName)))

        resolve(normalizedData)
        return
      }

      let wrapperMethod = pathMap[routePath].wrapperMethod
      let wrapperMethodArgs = []

      Object.keys(params).forEach(key => {
        wrapperMethodArgs.push(params[key])
      })

      // call the mapped Pokedex method
      const P = new Pokedex(config)

      P[wrapperMethod](...wrapperMethodArgs)
        .then(response => {
          let normalizedData = this.normalize(normalizePattern, response)

          localStorage.setItem(pathName, JSON.stringify(normalizedData))
          // console.info(`resolved ${pathName}`)
          resolve(normalizedData)
        })
        .catch(error => {
          console.log('There was an ERROR: ', error) // eslint-disable-line no-console
          reject(error)
        })
    })
  }

  componentDidMount() {
    let props = this.props
    let childrenProps = props.children.props
    let dataArgs = {
      location: props.location,
      params: props.params,
      routePath: childrenProps.route.path
    }
    let dataResult = this.getData(dataArgs)

    dataResult
      .then(response => {
        this.setState({
          active: false,
          data: response
        })
      })
      .catch(error => {
        console.error(error) // eslint-disable-line no-console
      })
  }

  componentWillReceiveProps(next) {
    let current = this.props

    //console.log('current', current)
    //console.log('next', next)

    if (current.location.pathname !== next.location.pathname) {
      // @TODO DRY
      let nextChildrenProps = next.children.props
      let dataArgs = {
        location: next.location,
        params: next.params,
        routePath: nextChildrenProps.route.path
      }
      let dataResult = this.getData(dataArgs)

      dataResult
        .then(response => {
          this.setState({
            active: false,
            data: response
          })
        })
        .catch(error => {
          console.error(error) // eslint-disable-line no-console
        })
    }
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
