import React from "react";
import { Link } from "react-router-dom";
import Notice from "../components/Notice";

export default function Home() {
  return (
    <div className="home">
      <ul className="navbar">
        <li>
          <Link to="/iv" className="link-tag">
            <div className="link-element">Interactive Videos</div>
          </Link>
        </li>
        <li>
          <Link to="/testpaper" className="link-tag">
            <div className="link-element">Testpapers</div>
          </Link>
        </li>
        <li>
          <Link to="/classreport" className="link-tag">
            <div className="link-element">Class Reports</div>
          </Link>
        </li>
        <li>
          <Link to="/additionalcontent" className="link-tag">
            <div className="link-element">Additional Contents</div>
          </Link>
        </li>
      </ul>
      <div className="home-contents">
        <Notice />
        <img src="logo.jpg" className="banner" />
      </div>
    </div>
  );
}
