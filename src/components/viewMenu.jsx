import { menu_list } from "../assets/assets";
import "../componentCSS/viewMenu.css";

import React from "react";

const ViewMenu = () => {
  return (
    <>
      <div className="viewMenu" id="vMenu">
        <h1>Explore our menu</h1>
        <p className="viewMenuText">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, on delicious meel at a time.
        </p>
        <div className="viewMenuList">
          {menu_list.map((item, index) => {
            return (
              <div key={index} className="menuListItem">
                <img src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ViewMenu;
