import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home/home'
import pages from './pages'

class App extends Component {
  render() {
    const routes = pages.map((page, key) => {
      return <Route exact path={"/static-websites/" + String(key + 1)} component={page.component} key={key} />
    })
    return (
      <Router>
        <div>
          <Route exact path="" component={Home} />
          {routes}
        </div>
      </Router>
    )
  }
}

export default App