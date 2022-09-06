import React from "react";

import GitMeThere from "../../images/GitMeThere.png";
import MixItUp from "../../images/MixItUp.png";
import passwordGenerator from "../../images/passwordGenerator.png";

export default function Projects() {
  return (
    <div className="portfolio-container">
      <div className="projects-1">
        <h3 className="headerPort">Git Me There!</h3>

        <a href="https://andcooke.github.io/git-me-there/">
          <img className="imagePort" src={GitMeThere}></img>
          Click Me!
        </a>
      </div>
      <div className="project-2">
        <h3 className="headerPort">Mix It Up</h3>

        <a href="https://adadlaldalkmdlka.herokuapp.com/login">
          <img className="imagePort" src={MixItUp}></img>
        Click Me!
        </a>
      </div>
      <div className="Project-3">
        <h3 className="headerPort">Password Generator</h3>
        
        <a href="https://jnadal22.github.io/PassWordGenerator-Challenge/index.html">
          <img className="imagePort" src={passwordGenerator}></img>
          Click Me!
        </a>
      </div>
    </div>
  );
}
