import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext(null);

const StoreContextProvidor = (props) => {
  const [cartItems, setCartItems] = useState({});

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

  const storeContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
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
