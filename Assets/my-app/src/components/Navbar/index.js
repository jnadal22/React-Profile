import React from "react";

import About from "../aboutMe";

export default function nav() {
  const NavStyle = { border: "1px orange", padding: "100px", fontSize: "30px" };

  return (
    
      <div className="navbar container">
        <div style={NavStyle}>
          <a href="../component">About Me</a>
        </div>
        <div style={NavStyle}>
          <a href="">Portfolio</a>
        </div>
        <div style={NavStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={NavStyle}>
          <a href="#">Resume</a>
        </div>
      </div>
    
  );
}
