import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
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
            <nav>
              <ul className="headerLinks">
                <li>
                  <a>Media</a>
                </li>
                <li>
                  <a>Marketing</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <div className="searchDiv">
                    <img src="/search 2.png" />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className="navbarLinks">
          <li className="highlitedLink blueBorder">
            <Link to="/News">
              <a>NEWS</a>
            </Link>
          </li>
          <li className="orangeBorder">
            <Link to="/Business">
              <a>BUSINESS</a>
            </Link>
          </li>
          <li className="greenBorder">
            <Link to="/Sports">
              <a>SPORTS</a>
            </Link>
          </li>
          <li className="lightblueBorder">
            <Link to="/Life">
              <a>LIFE</a>
            </Link>
          </li>
          <li className="yellowBorder">
            <Link to="/Tech">
              <a>TECH</a>
            </Link>
          </li>
          <li className="brownBorder">
            <Link to="/Travel">
              <a>TRAVEL</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
