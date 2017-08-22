import React, { Component } from 'react'
import './index.css'
import logo from './svgs/log.svg'
import iconSearch from './svgs/icon-search.svg'
import iconCalendar from './svgs/icon-calendar.svg'
import iconGuest from './svgs/icon-guest.svg'
import cover1 from './svgs/cover1.svg'
import cover2 from './svgs/cover2.svg'
import iconFb from './svgs/icon-fb.svg'
import iconSmall from './svgs/logo-small.svg'

class StaticSite1 extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="top-header">
            <div id="top-header-left">
              <img id="logo" src={logo} alt="logo" />
              <div id="search-bar">
                <div className="search-item">
                  <img src={iconSearch} alt="icon-search" />
                  <p>Anywhere</p>
                </div>
                <div className="search-item">
                  <img src={iconCalendar} alt="" />
                  <p>Anytime</p>
                </div>
                <div className="search-item">
                  <img src={iconGuest} alt="" />
                  <p>1 guest</p>
                </div>
              </div>
            </div>
            <div id="top-header-right">
              <p>Become a host</p>
              <p>Help</p>
              <p>Sign up</p>
              <p>Log in</p>
            </div>
          </div>
          <div id="top-bar">
            <div className="top-bar-item top-bar-item-selected">
              <p>FOR YOU</p>
              <div></div>
            </div>
            <div className="top-bar-item">
              <p>HOMES</p>
            </div>
            <div className="top-bar-item">
              <p>EXPERIENCES</p>
            </div>
            <div className="top-bar-item">
              <p>PLACES</p>
            </div>
          </div>
          <div id="top-divider"></div>
        </header>
        <div id="section-container">
          <div className="section-row">
            <h1 className="row-header">
              Just Booked
            </h1>
            <div className="row-items">
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
            </div>
          </div>

          <div className="section-row">
            <h1 className="row-header">
              Featured destinations
            </h1>
            <div className="row-items">
              <div className="row-item">
                <img src={cover2} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover2} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover2} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover2} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
            </div>
          </div>

          <div className="section-row">
            <h1 className="row-header">
              Featured destinations
            </h1>
            <div className="row-items">
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
              <div className="row-item">
                <img src={cover1} alt="" />
                <p>$7956 Step behind the scenes of Havana’s theater</p>
                <p>84 reviews</p>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <hr />
          <div className="footerContainer">
            <div className="footerColumns">
              <div className="footerColumn">
                <p className="columnTitle">Airbnb</p>
                <ul>
                  <li>About Us</li>
                  <li>Carees</li>
                  <li>Press</li>
                  <li>Policies</li>
                  <li>Help</li>
                  <li>Diversity & Belonging</li>
                </ul>
              </div>
              <div className="footerColumn">
                <p className="columnTitle">Airbnb</p>
                <ul>
                  <li>About Us</li>
                  <li>Carees</li>
                  <li>Press</li>
                  <li>Policies</li>
                  <li>Help</li>
                  <li>Diversity & Belonging</li>
                </ul>
              </div>
              <div className="footerColumn">
                <p className="columnTitle">Airbnb</p>
                <ul>
                  <li>About Us</li>
                  <li>Carees</li>
                  <li>Press</li>
                  <li>Policies</li>
                  <li>Help</li>
                  <li>Diversity & Belonging</li>
                </ul>
              </div>
              <div className="footerColumn">
                <p className="columnTitle">Airbnb</p>
                <ul>
                  <li>About Us</li>
                  <li>Carees</li>
                  <li>Press</li>
                  <li>Policies</li>
                  <li>Help</li>
                  <li>Diversity & Belonging</li>
                </ul>
              </div>
            </div>
            <hr className="bottom-hr" />
            <div className="bottom-footer">
              <div className="bottom-footer-logo">
                <img src={iconSmall} alt="" />
                <p>Airbnb, Inc.</p>
              </div>
              <div className="bottom-footer-links">
                <p>Terms</p>
                <p>Privacy</p>
                <p>Site Map</p>
                <img src={iconFb} alt="" />
                <img src={iconFb} alt="" />
                <img src={iconFb} alt="" />
              </div>
            </div>
          </div>
        </footer>
      </div>      
    )
  }
}

export default StaticSite1