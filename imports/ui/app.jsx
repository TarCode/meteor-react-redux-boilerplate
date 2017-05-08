import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './home'

export default () => (
  <Router>
    <main>
      <Route exact path="/" component={Home}/>
    </main>
  </Router>
)
