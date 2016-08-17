// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import store, { history } from './store'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Layout from './components/layouts/MainLayout'
const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
)

export default Routes
