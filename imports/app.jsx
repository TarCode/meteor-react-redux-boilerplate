import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configure-store'

import Navbar from './ui/navbar'
import Home from './ui/home'
import Pokemon from './ui/pokemon/index'

injectTapEventPlugin();
const store = configureStore()

export default () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <header>
            <Navbar/>
          </header>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pokemon" component={Pokemon}/>
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
)
