import { React } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Testpaper() {
  return (
    <div className="container">
      <Link to="/" className="link-tag">
        <div className="return-link">Return Back</div>
      </Link>
      <div className="content-part">
        <h1>Test Paper</h1>
        <ul className="navbar">
          <li>
            <Link to="/testpaper/paper1" className="link-tag">
              <div className="link-element">Paper 1</div>
            </Link>
          </li>
          <li>
            <Link to="/testpaper/paper2" className="link-tag">
              <div className="link-element">Paper 2</div>
            </Link>
          </li>
          <li>
            <Link to="/testpaper/paper3" className="link-tag">
              <div className="link-element">Paper 3</div>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
