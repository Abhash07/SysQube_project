import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="navbar-left">
            <div className="img-container">
              <img src="./sysQube.png" alt="" />
            </div>
            <a href="home">
              {" "}
              <span>SysQube Technology</span>
            </a>
          </div>

          <div className="navbar-right">
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
            <button className="btn1">Start a campaign</button>
            <button className="btn2">Donate Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
