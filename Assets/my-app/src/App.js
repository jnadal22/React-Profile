import React from "react";

import IntroPage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Aboutme from "./components/aboutMe";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <div>
        <IntroPage />
      </div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <Aboutme />
      </div>
      <div className="footer">
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
