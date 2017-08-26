import React, { Component } from 'react'
import './style.css'
import iOSBadge from './imgs/badge-app-store.png'
import androidBadge from './imgs/badge-google-play.png'
import heroIcons from './imgs/hero-icons.png'
import heroiPhone from './imgs/hero-iPhone.png'

class StaticPage2 extends Component {
  state = {  }
  render() {
    return (
      <div className="StaticPage2">
        <div className="hero">
          <header>
          <h1 id="logo">ChatApp</h1>
            <ul>
              <li>Feature</li>
              <li>How it Work</li>
              <li>Download</li>
            </ul>
          </header>
          <div className="body">
            <div className="description">
              <h1>New Era of Messaging Secure System Messaging</h1>
              <h2>Chat app messaging and powerful than any other application. you can enjoy free call and free chat anytime and forever</h2>
              <img src={iOSBadge} alt="iOS Badge" />
              <img src={androidBadge} alt="Android Badge" />
            </div>
            <div className="description-iPhone">
              <img src={heroIcons} alt="" />
              <img src={heroiPhone} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StaticPage2