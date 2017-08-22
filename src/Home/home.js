import React, { Component } from 'react'
import HomeItem from './homeItem'
import pages from '../pages'
import 'normalize.css'
import './home.css'

class Home extends Component {
  render() {
    const homeItems = pages.map((page, key) => {
      return <HomeItem name={page.name} link={page.link} key={key} index={key} />
    })
    return (
      <div>
        <div className="home">
          <h1>List</h1>
          {homeItems}
        </div>
      </div>
    )
  }
}

export default Home