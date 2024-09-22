import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext(null);

const StoreContextProvidor = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3000";

  const [token, setToken] = useState("");

  // we want that when we refresh the page we will not get logged out

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const addToCart = (itemid) => {
    if (!cartItems[itemid]) {
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removeFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const storeContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <>
      <StoreContext.Provider value={storeContextValue}>
        {props.children}
      </StoreContext.Provider>
    </>
  );
};

export { StoreContextProvidor, StoreContext };
