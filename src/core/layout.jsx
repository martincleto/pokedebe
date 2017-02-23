import React from 'react'

import Header from 'Components/Header'
import Footer from 'Components/Footer'

function layout(Component) {
  return function(props) {
    return (
      <div className="container">
        <Header />
        <Component {...props}/>
        <Footer />
      </div>
    )
  }
}

export default layout
