import React from "react";
import "./Css/Rules.css";
import { NavLink } from "react-router-dom";

export default function Rules() {
  return (
    <div className="rules-container">
      <div className="rules-box">
        <h1 className="rules-title">- How to Play -</h1>
        <ul className="rules-list">
          <li> Answer questions correctly to score points.</li>
          <li> You have 3 tries before the answer is revealed.</li>
          <li> Every correct answer moves your progress bar forward.</li>
          <li> Complete all challenges to become the CSS Champion!</li>
        </ul>
        <NavLink to="/background">
          <button className="rules-btn">Start Playing</button>
        </NavLink>
      </div>
    </div>
  );
}


