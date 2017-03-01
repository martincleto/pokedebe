
import React, { Component } from 'react'
import { Link } from 'react-router'

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
          <h1 className="detail__title">{this.props.data.name}</h1>
          <p>Pokedex #{this.props.data.id}</p>
        </header>
        <ul className="detail__titleattributes-list">
          <li className="detail__attributes-item">Weight: <strong>{this.props.data.weight}</strong></li>
          <li className="detail__attributes-item">Height: <strong>{this.props.data.height}</strong></li>
        </ul>
        <p className="detail__back-button">
          <Link to="/"><i className="icon-back"></i>Back to Search</Link>
        </p>
      </div>
    )
  }
}

Detail.propTypes = {
  data: React.PropTypes.object
}

export default Detail
