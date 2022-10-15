import React from 'react'
import '../styles/Header.scss'
const Header = () => {
  return (
      <header>
          <div className="header">
            

              <div className="headerContent">
                  <div className="kenazHeader">
                    <div className="kenazLogo">
                      <img src="/Vector Smart Objecta 1.png" />
                    </div>
                      <h2>Kenaz</h2>
                  </div>
                  <div>
                      <ul className="headerLinks">
                          <li><a>Media</a></li>
                          <li><a>Marketing</a></li>
                          <li><a>Contact</a></li>
                          <li>
                            <div className="searchDiv">
                                <img src="/search 2.png" />
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="navbar">
              <ul className="navbarLinks">
                  <li style={{ borderColor: "#299EC3" }} className="highlitedLink"><a>NEWS</a></li>
                  <li style={{ borderColor: "#EE6151" }}><a>BUSINESS</a></li>
                  <li style={{ borderColor: "#84C14F" }}><a>SPORTS</a></li>
                  <li style={{ borderColor: "#5DCFF3" }}><a>LIFE</a></li>
                  <li style={{ borderColor: "#FCC44D" }}><a>TECH</a></li>
                  <li style={{ borderColor: "#A99765" }}><a>TRAVEL</a></li>
              </ul>
          </div>
      </header>
  )
}

export default Header