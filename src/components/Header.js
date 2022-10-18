import React, { useState } from "react";
import Cart from "./Cart";
import "../css/Header.css";
import Logout from "./Logout";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <header>
      <nav className="navbar has-background-light p-3">
        <div className="navbar-brand">
          <a className="navbar-item" id="Aheading" href="/">
            <span className="is-size-4 is-uppercase" id="heading">
              Cart Project
            </span>
          </a>
          <span className="navbar-burger" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          className={
            isActive
              ? "navbar-menu is-active has-background-light is-clickable"
              : "navbar-menu has-background-light is-clickable"
          }
          id="nav-links"
        >
          <div className="navbar-end">
            <span className="navbar-item" id="headerbutton">
              <Cart />
              <Logout />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
