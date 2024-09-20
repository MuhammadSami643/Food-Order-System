import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../componentCSS/foodDisplay.css";
import { assets } from "../assets/assets";

const FoodDisplay = (category) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <div className="food-display" id="f-display">
        <h2>Top dishes near you</h2>
        <div className="food-list">
          {food_list.map((item, index) => {
            return (
              <div key={index} className="food-display-container">
                <div className="food-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="food-info">
                  <div className="food-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="Error" />
                  </div>
                  <p>{item.description}</p>
                  <h3>${item.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
