
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from 'Containers/App'
import Detail from 'Components/Detail'
import Search from 'Components/Search'

render(
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path='/' component={Search}/>
        <Route path='/detail/:name' component={Detail} />
      </Route>
    </Router>,
    document.getElementById('app')
)
