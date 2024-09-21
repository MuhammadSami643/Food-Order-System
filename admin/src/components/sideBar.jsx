import React from "react";
import { assets } from "../assets/assets";
import "../componentsCSS/sideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <img src={assets.add_icon} alt="add" />
            <p>Add Items</p>
          </div>

          <div className="sidebar-option">
            <img src={assets.order_icon} alt="add" />
            <p>List Items</p>
          </div>

          <div className="sidebar-option">
            <img src={assets.order_icon} alt="add" />
            <p>Orders</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
