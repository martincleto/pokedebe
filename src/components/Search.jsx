
import React, { Component } from 'react'

//require('stylesheets/search.scss')


class Search extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="search__form">
        <input type="text" id="q" className="search__form-field" placeholder="Enter a Pokemon name, e.g. Bulbasaur"/>
        <button id="b" className="search__form-button" onClick="">Search!</button>
      </form>
    )
  }

  componentDidMount() {
    // console.info('[Search] Search mounted')
    // console.log('[Search] data,', this.props.data)
  }
}

Search.propTypes = {
  data: React.PropTypes.array
}

export default Search
