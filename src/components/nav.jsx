import React from "react";
import { HashLink } from "react-router-hash-link";
import "../css/nav.css";


const Nav = () => {
  return (
    <nav>
      <h2 className="logo">Intelligent Automation Technologies</h2>
      <ul className="list nav__list container">
        <li className="nav__item">
          <HashLink to="#projects">Products</HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="#solutions">Solutions</HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="#research">Research</HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="#contact">Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
