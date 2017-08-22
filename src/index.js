import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './Home/home'

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("root")
)
