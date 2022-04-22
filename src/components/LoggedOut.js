import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoggedOut() {
  const navigate = useNavigate();

  return (
    <>
      <div className="log-out">
        <div className="login-box">
          <input type="text" placeholder="Username" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button className="login-button" onClick={() => navigate("/home")}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
