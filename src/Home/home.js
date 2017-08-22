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
      <div className="home">
        <h1>List</h1>
        {homeItems}
        <footer>
          <a href="https://github.com/Road-To-FE/static-websites" target="_blank" rel="noopener noreferrer">Road-To-FE/static-websites</a>
          <a href="https://zhaoxinyu.me" target="_blank" rel="noopener noreferrer">@X140Yu</a>
        </footer>
      </div>
    )
  }
}

export default Home