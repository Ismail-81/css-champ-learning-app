import React from 'react'
import "./Css/Header.css"
import logo from "./assets/logo.png";
import Clock from './Clock';
import {NavLink} from "react-router-dom";

function Header() {
  return (
     <nav>
        <div>
          <img src={logo} className="logo" alt="" />
      <span>{'{CssChamp}'}</span>
        </div>

        <div style={{marginLeft:'60px'}}> <Clock /></div>

        <div className="links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
  )
}

export default Header
