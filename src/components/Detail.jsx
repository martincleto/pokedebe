
import React, { Component } from 'react'


//require('stylesheets/detail.scss')

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{this.props.data.name}</h1>
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
