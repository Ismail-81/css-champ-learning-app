import { React, useState } from 'react'
import {NavLink} from "react-router-dom";
import "./Css/App.css"

function Sidebar() {
    const [showMore, setShowMore] = useState(false)
  return (
    <div className="main">
      <div className="menu-bar-left">
        <div className="menu">
          <div className="head-item">Properties</div>

          {/* Always visible */}
          <NavLink className="menu-item" to="/background">background</NavLink>
          <NavLink className="menu-item" to="/color">color</NavLink>
          <NavLink className="menu-item" to="/font-size">font-size</NavLink>
          <NavLink className="menu-item" to="/border">border</NavLink>
          <NavLink className="menu-item" to="/margin">margin</NavLink>
          <NavLink className="menu-item" to="/padding">padding</NavLink>

          {/* Extra items (toggle) */}
          {showMore && (
            <>
              <NavLink className="menu-item" to="/display">Upcoming</NavLink>
              <NavLink className="menu-item" to="/flex">Upcoming</NavLink>
              <NavLink className="menu-item" to="/grid">Upcoming</NavLink>
              <NavLink className="menu-item" to="/position">Upcoming</NavLink>
              <NavLink className="menu-item" to="/-">Upcoming</NavLink>
              <NavLink className="menu-item" to="/-">Upcoming</NavLink>
              <NavLink className="menu-item" to="/-">Upcoming</NavLink>
              <NavLink className="menu-item" to="/-">Upcoming</NavLink>
              <NavLink className="menu-item" to="/-">Upcoming</NavLink>
            </>
          )}

          {/* Toggle button styled like menu item */}
          <div
            className="menu-item"
            onClick={() => setShowMore(!showMore)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            {showMore ? "Show Less ▲" : "Load More ▼"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
