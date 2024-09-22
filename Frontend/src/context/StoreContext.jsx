import { createContext, useEffect, useState } from "react";
import axios from "axios";

const StoreContext = createContext(null);

const StoreContextProvidor = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3000";

  const [token, setToken] = useState("");

  //Function to fetch data from database regarding food products, here we call the API for get all food product
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/food/food-list");
    setFoodList(response.data.data);
  };

  // we want that when we refresh the page we will not get logged out
  useEffect(() => {
    async function loadData() {
      //We want that this function runs when web-page is load and data is fetch from database
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData(); //here we call the function which fetch data
  }, []);

  //We want to set our products which we fetch through API's from backend
  const [food_list, setFoodList] = useState([]);

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
