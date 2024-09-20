import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/placeOrder";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="place-order" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
