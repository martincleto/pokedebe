
import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import {hashHistory} from 'react-router'

import styles from 'Stylesheets/search.scss'  // eslint-disable-line no-unused-vars

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: []
    }
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const data = this.props.data.results

    return inputLength === 0 ? [] : data.filter(item =>
      item.name.toLowerCase().slice(0, inputLength) === inputValue
    )
  }

  getSuggestionValue(suggestion) {
    return suggestion.name
  }

  renderSuggestion(suggestion) {
    return (
      <div>{suggestion.name}</div>
    )
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  onSearch(event) {
    event.preventDefault()

    hashHistory.push(`/detail/${this.state.value}`)
  }

  onSuggestionsFetchRequested({ value }) {
    let suggestions = this.getSuggestions(value)

    this.setState({
      suggestions: suggestions
    })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Enter a Pokemon name e.g. Bulbasaur',
      value,
      onChange: this.onChange.bind(this)
    }

    return (
      <form className="search-form">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      <button id="btn-search" className="search-form__button" onClick={this.onSearch.bind(this)}>Search!</button>
      </form>
    )
  }
}

Search.propTypes = {
  data: React.PropTypes.object
}

export default Search
