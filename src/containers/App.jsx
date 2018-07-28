import React, {Component} from 'react'

import apiMap from 'Config/apiMap'
import {api} from 'Services/api'
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
  }

  getData = ({location, routePath, params}) => {
    this.setState({
      active: true
    })

    return new Promise((resolve, reject) => {
      let pathName = location.pathname

      // check if stored
      if (localStorage.getItem(pathName)) {
        resolve(JSON.parse(localStorage.getItem(pathName)))
        return
      }

      let uri = [apiMap[routePath].endpoint]
      let query = apiMap[routePath].query

      Object.keys(params).forEach(key => {
        uri.push(params[key])
      })

      uri = uri.join('/')

      if (query.length) {
        uri += `?${query}`
      }

      api.get(uri).then(response => {
        localStorage.setItem(pathName, JSON.stringify(response))
        resolve(response)
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
        <div className="loading" aria-hidden={!this.state.active}>loading...</div>
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
