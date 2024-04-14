import "../styles/styles.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false); //init state for responsive nav

  //used to open/close sidebar on mobile devices
  const moveSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav className="nav">
        <ul>
          <li className="hideOnMobile">
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link className="nav-brand" to="/">
              StatPadder
            </Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/players">Players</Link>
          </li>
          <li onClick={() => moveSidebar()} className="menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </li>
        </ul>
        {sidebar && (
          <ul id="sidebar">
            <li onClick={() => moveSidebar()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/players">Players</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
