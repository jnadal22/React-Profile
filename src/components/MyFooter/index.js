import React from "react";

import Githublogo from "../../images/Githublogo.png";
import linkedinLogo from "../../images/linkedinLogo.png";


export default function MyFooter() {
  return (
    <footer className="PageFooter">
      <p className="footerDescription">JORDAN NADAL 2022 UT AUSTIN CODING BOOTCAMP ALUMNI</p>
      <a href="https://github.com/jnadal22">
        <img className="image1" src={Githublogo}></img>
      </a>
      <a href="https://www.linkedin.com/feed/"><img className="image2" src={linkedinLogo}></img></a>
    </footer>
  );
}
