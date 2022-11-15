import React from "react";
import "./Navbar.css";
import logo from "./img/logo.png";
import vector from "./img/Vector.png";
import vector2 from "./img/vector2.png";
import arrow from "./img/arraow.png";
const Navbar = () => {
  return (
    <>
      <nav className="main_nav_container">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="others_options">
            <p className="other_options_text">
                My Assignment
            </p>
            <p className="other_options_text">
                Chat with Mentor
            </p>
            <p className="other_options_text active" id="profile_name">
               <img src={vector} alt="" /> 
               ProfileName
               <img src={vector2} alt="" />
               <img src={arrow} alt="" />
            </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
