import React from "react";

import About from "../aboutMe/index";
import Projects from "../portfolio/index";
import contact from "../contactMe/index";
import Resume from "../Resume/index";


export default function nav({changeSection}) {
  

const updateSection = (section) => {
  changeSection(section)
}


  return (
    
      <div className="navbar-container">
        <div >
          <button className="nav-btn" onClick={() => updateSection('aboutme')}>About Me</button>
        </div>
        <div>
          <button className="nav-btn" onClick={() => updateSection('portfolio')}>Portfolio</button>
        </div>
        <div>
          <button className="nav-btn" onClick={() => updateSection('contactme')}>Contact</button>
        </div>
        <div>
          <button className="nav-btn" onClick={() => updateSection('resume')}>Resume</button>
        </div>
      </div>
    
  );
}
