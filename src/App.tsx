import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomMarque from "./components/CustomMarque";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <div className="p-2 h-screen bg-black">
      <Navbar />
      <Home />
      <Categories />
    </div>
  );
};

export default App;
