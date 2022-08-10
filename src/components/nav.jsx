import React from "react";
import { HashLink } from "react-router-hash-link";
import "../css/nav.css";


const Nav = () => {
  return (
    <nav>
      <h2 className="logo"><a href="/">Intelligent Automation Technologies</a></h2>
      <ul className="list nav__list container">
        <li className="nav__item">
          <HashLink to="#products">Products</HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="../solutions">Solutions</HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="#footer">Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
