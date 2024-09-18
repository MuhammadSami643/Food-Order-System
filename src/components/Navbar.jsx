import React, { useState } from "react";
import { assets } from "../assets/assets";
import "../componentCSS/Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />
        <ul className="menu">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu{" "}
          </li>
          <li
            onClick={() => setMenu("Mobile App")}
            className={menu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("Contact Us")}
            className={menu === "Contact Us" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
        <div className="nav-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="nav-search-icon">
            <img src={assets.basket_icon} alt="Cart" />
            <div className="dot"></div>
          </div>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
