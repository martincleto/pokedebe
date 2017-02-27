
import React, { Component } from 'react'

import styles from 'Stylesheets/footer.scss'  // eslint-disable-line no-unused-vars

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footer">
        <p>Made with <span className="icon-love">love</span> by <a href="http://github.com/martincleto" title="martincleto at GitHub">martincleto</a> to Ainara & Enric</p>
      </footer>
    )
  }
}

export default Footer
