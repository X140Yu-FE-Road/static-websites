import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

class HomeItem extends Component {

  render() {
    return (
      <div className="homeItem">
        <p>{this.props.index + 1}.</p>
        <NavLink exact to={process.env.PUBLIC_URL + '/' + String(this.props.index + 1)}>
          {this.props.name}
        </NavLink>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">link</a>
      </div>
    )
  }
}

export default HomeItem