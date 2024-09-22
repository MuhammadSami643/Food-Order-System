import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/sideBar";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ListItems from "./pages/ListItems";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />

        <Routes>
          <Route path="/add-item" element={<AddItems />} />
          <Route path="/items-list" element={<ListItems />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
