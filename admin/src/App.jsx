import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/sideBar";

const App = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
      </div>
    </>
  );
};

export default App;
