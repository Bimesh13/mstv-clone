import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img src="./logo.jpg" className="logo" />
      <div className="header-elements">
        <h1 className="header-heading">MST TV Bidhyala</h1>
        <h3 className="header-location">
          Purkot - 1, Tanahun, Gandaki Pradesh, Nepal
        </h3>
        <h3 className="header-motto">Where Excellence is Our Tradition</h3>
      </div>
    </div>
  );
}
