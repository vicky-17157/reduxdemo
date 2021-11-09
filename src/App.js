import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom'

import DashboardPage from './pages/dashboardpage'
import DemosPage from './pages/postpages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/demos" component={DemosPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App