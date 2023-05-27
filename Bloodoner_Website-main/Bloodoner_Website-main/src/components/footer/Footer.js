import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaSnapchat, } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="contact-short">
        <div>
          <div>
            <h3> Ready to get Started?</h3>
            <h3> Donate Blood Today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to="/DonateBlood">
              <button className="button"> Donate</button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* Footer Section  */}

      <footer className="footer">
        <div className="center-row">
          <div>
            <h3>Bloodoner</h3>
            <h3>Donate blood to save lifes.</h3>
          </div>
          {/* 2nd column  */}

          <div>
            <h3>Follows Us</h3>
            <div>
              <FaFacebook className="icons" />
              <FaInstagram className="icons" />
              <FaSnapchat className="icons" />
            </div>
          </div>

          {/* 3rd column  */}

          <div>
            <h3>Call Us</h3>
            <h3>+92-3306178305</h3>
          </div>
        </div>

        {/* bottom section  */}

        <div className="footer-bottom--section">
          <div>
            <hr />
            <p>@{new Date().getFullYear()} Bloodoner. All Rights Reserved</p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
