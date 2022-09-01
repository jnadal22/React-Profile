import React from "react";

import Githublogo from '../images/Github.png';
import linkedinLogo from '../images/linkedinLogo.png';


export default function MyFooter() {
  return (
    <div className="Footer">
      <p>JORDAN NADAL 2022 UT AUSTIN CODING BOOTCAMP ALUMNI</p>
      <a href="https://github.com/jnadal22">
        <img className="image" src={Githublogo}></img>
      </a>
      <a href="https://www.linkedin.com/feed/"><img className="image" src={linkedinLogo}></img></a>
    </div>
  );
}
