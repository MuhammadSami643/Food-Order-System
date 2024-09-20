import { useContext } from "react";
import { food_list } from "../assets/assets";

const storeContext = useContext(null);

const StoreContextProvidor = (props) => {
  const storeContextValue = {
    food_list,
  };

  return (
    <>
      <storeContext.Provider value={storeContextValue}>
        {props.children}
      </storeContext.Provider>
    </>
  );
};

export default StoreContextProvidor;
