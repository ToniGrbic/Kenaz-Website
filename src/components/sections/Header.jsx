import React from "react";
import "../../styles/Header.scss";
import { Link, NavLink } from "react-router-dom";
const navLinks = [
  { name: "News", color:"blue"},
  { name: "Business", color: "orange" },
  { name: "Sport", color: "green" },
  { name: "Life", color: "lightblue" },
  { name: "Tech", color: "yellow" },
  { name: "Travel", color: "brown" },
];

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="headerContent">
          <div className="kenazHeader">
            <div className="kenazLogo">
              <img src="/Vector Smart Objecta 1.png" />
            </div>
            <h2>
              <Link to="/">Kenaz</Link>
            </h2>
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
          {navLinks.map((link) => {
            return (
              <li className={`${link.color}Border`} key={link.name}>
                <NavLink
                  to={`/${link.name}`}
                  className={({ isActive }) =>
                    isActive ? `${link.color}Bg` : null
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
