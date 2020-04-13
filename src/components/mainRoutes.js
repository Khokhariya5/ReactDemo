import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/home'
import Auth from './auth/auth'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const MainRoutes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/auth' component={Auth}/>
    </Switch>
  </main>
)

export default MainRoutes