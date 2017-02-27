
import React, { Component } from 'react'

import styles from 'Stylesheets/detail.scss'  // eslint-disable-line no-unused-vars

// @TODO Implement Detail image fetch & store, e.g. by using Google Custom Search Api: https://developers.google.com/custom-search/

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="detail__inner-wrapper">
        <header>
          <h1 className="detail_title">{this.props.data.name}</h1>
          <p>Pokedex #{this.props.data.id}</p>
        </header>
        <ul className="detail_attributes-list">
          <li className="detail_attributes-item">Weight: <strong>{this.props.data.weight}</strong></li>
          <li className="detail_attributes-item">Height: <strong>{this.props.data.height}</strong></li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    // console.info('[Detail] Detail mounted')
    // console.log('[Detail] data,', this.props.data)
  }
}

Detail.propTypes = {
  data: React.PropTypes.object
}

export default Detail
