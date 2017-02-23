
import React, { Component } from 'react'

//require('stylesheets/search.scss')

class Search extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="search-form">
        <input type="text" id="q" className="search-form__field" placeholder="Enter a Pokemon name, e.g. Bulbasaur"/>
        <button id="btn-search" className="search-form__button" onClick="">Search!</button>
      </form>
    )
  }
}

export default Search
