import React, { useState } from "react";
import Header from "../components/header";
import ViewMenu from "../components/viewMenu";
import "../pagesCSS/Home.css";
import FoodDisplay from "../components/foodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ViewMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  );
};

export default Home;
