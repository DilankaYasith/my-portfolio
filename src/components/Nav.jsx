import React from "react";
import "../styles/Nav.css";

function Nav() {
    return (<nav >
        <div className="container">
          <div className="logo">
            <span >
                <h2>Hello!</h2>
            </span>
          </div>
          <div className="linksContainer">
            <a href="#home" >
              Home
            </a>
            <a href="#aboutme">
              About Me
            </a>
            <a href="#projects">
              Projects
            </a>
            <a href="#education">
              Education
            </a>
            <a href="#skills" >
              Skills
            </a>
          </div>
        </div>
      </nav>
    );
}

export default Nav;