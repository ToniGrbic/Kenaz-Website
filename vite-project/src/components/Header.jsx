import React from 'react'

const Header = () => {
  return (
      <header>
          <div className="header">
              <div className="headerContent">
                  <div className="kenazHeader">
                      <img src="/Vector Smart Objecta 1.png" />
                      <h2>KENAZ</h2>
                  </div>
                  <div>
                      <ul className="headerLinks">
                          <li><a>Media</a></li>
                          <li><a>Marketing</a></li>
                          <li><a>Contact</a></li>
                          <li><img src="/search 2.png" /></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="navbar">
              <ul className="navbarLinks">
                  <li ><div className="highlitedLink"><a>NEWS</a></div></li>
                  <li><a>BUSINESS</a></li>
                  <li><a>SPORTS</a></li>
                  <li><a>LIFE</a></li>
                  <li><a>TECH</a></li>
                  <li><a>TRAVEL</a></li>
              </ul>
          </div>
      </header>
  )
}

export default Header