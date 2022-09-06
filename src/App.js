import React from "react";
import { useState } from "react";

import Homepage from "./components/HomePage";
import IntroPage from "./components/HomePage";
import Contact from "./components/contactMe";
import Portfolio from "./components/portfolio"
import Navbar from "./components/Navbar";
import Aboutme from "./components/aboutMe";
import MyFooter from "./components/MyFooter";
import Resume from "./components/Resume";

function App() {

const [ section, setSection ] = useState("homepage")

const changeSection = (newSection) => {
  setSection(newSection)
}


  return (
    <div className="flex-column justify-flex-start min-100-vh">
      
      <div>
        <Navbar changeSection = {changeSection}/>
      </div>

      <div className="container reactComponent">
        {section === "homepage" ? <Homepage /> : ""}
        {section === "contactme" ? <Contact /> : ""}
        {section === "aboutme" ? <Aboutme /> : ""}
        {section === "portfolio" ? <Portfolio /> : ""}
        {section === "resume" ? <Resume /> : ""}
      </div>
     
      <div className="footer">
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
