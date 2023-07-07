import React from "react";
import { Link } from "react-router-dom";

//import components
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const NavBar = () => {
  return (
  <nav >
    <ul className="nav-bar">
      <li><Link className={"link"} to="/">Home</Link></li>
      <li><Link className={"link"} to="/new">Create pokemon</Link></li>
      <li><Link className={"link"} to="/search">Search pokemon</Link></li>
    </ul>
    <HamburgerMenu />
  </nav>
  );
};

export default NavBar;
