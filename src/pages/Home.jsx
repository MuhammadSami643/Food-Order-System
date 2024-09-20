import React, { useState } from "react";
import Header from "../components/header";
import ViewMenu from "../components/viewMenu";
import "../pagesCSS/Home.css";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ViewMenu category={category} setCategory={setCategory} />
    </>
  );
};

export default Home;
