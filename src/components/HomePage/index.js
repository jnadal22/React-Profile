import React from "react";

import chicagoBean from "../../images/chicagoBean.JPG";

export default function IntroPage() {
  return (
    <div className="container-homepage">
      
      
      <div>
      <div>
          <h1 id="homepage-header">Jordan Nadals Portfolio</h1>
        </div>
        <div className="header">
          <img
            id="pic1"
            src={chicagoBean}
            alt="Jordans porfolio"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}
