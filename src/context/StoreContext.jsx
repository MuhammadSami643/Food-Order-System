import { createContext } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext(null);

const StoreContextProvidor = (props) => {
  const storeContextValue = {
    food_list,
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
