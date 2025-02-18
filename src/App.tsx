import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="p-2 w-screen h-screen">
      {/* <Navbar/>
      Main App
    
      <Card/> */}

      <Home />
      <Navbar />
    </div>
  );
};

export default App;
