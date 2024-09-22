import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
import "../componentCSS/foodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <>
      <div className="food-display" id="f-display">
        <h2>Top dishes near you</h2>
        <div className="food-list">
          {food_list.map((item, id) => {
            // const [itemCount, setItemCount] = useState(0); -> This is also a way to change state(only state)
            if (category === "All" || category === item.category) {
              return (
                <div key={id} className="food-display-container">
                  <div className="food-image">
                    <img
                      className="food-image-container"
                      src={url + "/images/" + item.image.filename}
                      // src={url + "/images/" + item.image.filename}
                      alt={item.name}
                    />
                    {!cartItems[id] ? (
                      <img
                        className="add-button"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add"
                      />
                    ) : (
                      <div className="food-counter">
                        <img
                          onClick={() => removeFromCart(id)}
                          src={assets.remove_icon_red}
                          alt="Remove"
                        />
                        <p>{cartItems[id]}</p>
                        <img
                          onClick={() => addToCart(id)}
                          src={assets.add_icon_green}
                          alt="Add"
                        />
                      </div>
                    )}
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
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
