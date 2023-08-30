import React from "react";
import Home from "../components/Home";
import Appbar from "../components/Appbar";
import Loading from "../components/Loading";

const HomePage = () => {
  return (
    <div>
      <Appbar/>
      <Home />
    </div>
  );
};

export default HomePage;
