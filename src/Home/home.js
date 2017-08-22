import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import StaticPage1 from '../01'

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/01">01</NavLink></li>
        </ul>
        <Route exact path="/01" component={StaticPage1}/>
      </div>
    )
  }
}

export default Home