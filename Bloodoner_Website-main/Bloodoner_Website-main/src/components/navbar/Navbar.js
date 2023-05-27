import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    
    <>
      <div className="sum">
        <div className="logo">Bloodonor</div>
        <nav className="item">
          <ul className="ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/donateBlood">Donate Blood</Link>
            </li>
            <li>
              <Link to="/FindDonors">Find Donors</Link>
            </li>
            <li>
              <Link to="/OrderBlood">Order Blood</Link>
            </li>
            <li>
            <Link to="/LogIn">
              <button className="sign-button"> LOG IN</button>
            </Link>
            </li>
            <li>
            <Link to="/Register">
              <button className="sign-button"> Register</button>
            </Link>
            </li>
          </ul>
        </nav>
      </div>
     
    </>
  );
};

export default Navbar;
