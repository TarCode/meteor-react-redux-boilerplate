import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configure-store'
import Home from './ui/home'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <Router>
      <main>
        <Route exact path="/" component={Home}/>
      </main>
    </Router>
  </Provider>
)
