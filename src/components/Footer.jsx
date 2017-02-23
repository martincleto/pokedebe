
import React, { Component } from 'react'

//require('stylesheets/footer.scss')

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footer">
        <p>Made with <span>love</span> by <a href="http://github.com/martincleto" title="martincleto at GitHub">martincleto</a> to Ainara & Enric</p>
      </footer>
    )
  }
}

export default Footer
