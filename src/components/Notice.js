import React from "react";

export default function Notice() {
  return (
    <div className="notice-board">
      <h3>Notice Board</h3>
      <p className="notice-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <span className="notice-username">- Username</span>
      <span className="notice-date">April 21, 2022 - April 30, 2022</span>
    </div>
  );
}
