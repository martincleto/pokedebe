import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function layout(Component) {
  return function(props) {
    return (
      <div className="container">
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    )
  }
}

export default layout
