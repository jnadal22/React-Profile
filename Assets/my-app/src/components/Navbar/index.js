import React from "react";

import About from "./components/aboutMe";
import Projects from "./components/Projects";
import contact from "./components/ContactMe";
import Resume from "./components/Resume";


export default function nav() {
  const NavStyle = { border: "1px orange", padding: "100px", fontSize: "30px" };

  return (
    
      <div className="navbar container">
        <div style={NavStyle}>
          <a href={About}>About Me</a>
        </div>
        <div style={NavStyle}>
          <a href={Projects}>Portfolio</a>
        </div>
        <div style={NavStyle}>
          <a href={contact}>Contact</a>
        </div>
        <div style={NavStyle}>
          <a href={Resume}>Resume</a>
        </div>
      </div>
    
  );
}
