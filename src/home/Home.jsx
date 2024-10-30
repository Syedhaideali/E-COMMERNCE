import React from "react";
import Banner from "./Banner";  // Ensure the path is correct
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import Location from "./Location";
import About from "./About";
import AppSecity from "./AppSecity";

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <Location/>
      <About/>
      <AppSecity/>
    </div>
  );
};

export default Home;
