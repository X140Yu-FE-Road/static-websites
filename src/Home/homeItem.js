import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class HomeItem extends Component {

  render() {
    return (
      <div>
        <NavLink exact to={"/" + String(this.props.index + 1)}>
          {this.props.index + 1} - {this.props.name}
        </NavLink>
      </div>      
    )
  }
}

export default HomeItem