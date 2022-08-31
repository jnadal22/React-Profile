import React from "react";

export default function IntroPage() {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          fontFamily: "cursive",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div className="header">
          <img
            id="pic1"
            src="IMG_0660.JPG"
            alt="Jordans porfolio"
            width="400"
            height="400"
          />
          <h1>Jordan Nadals Portfolio</h1>
        </div>
      </div>
    </div>
  );
}
