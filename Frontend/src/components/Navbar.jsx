import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import "../componentCSS/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>
        <ul className="menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#vMenu"
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#mobile-app"
            onClick={() => setMenu("Mobile App")}
            className={menu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("Contact Us")}
            className={menu === "Contact Us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="nav-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="nav-search-icon">
            <NavLink to="/cart">
              <img src={assets.basket_icon} alt="Cart" />
            </NavLink>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
