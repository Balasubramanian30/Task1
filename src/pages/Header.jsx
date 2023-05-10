import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <div className="head">
        <div className="head1">
          <h2>Techo</h2>
        </div>
        <div className="head2">
          <ul>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li className="dropdown">
                <Link to="#">product</Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/computer" id="Computer">Computer</Link>
                  </li>
                  <li>
                    <Link to="#" id="Computer">Laptops</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
