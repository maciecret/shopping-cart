import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

import Cart from "./components/Cart";
import {CartProvider} from "react-use-cart"



function App() {
  
  return (
    <>
    {/* THIS IS HOW YOU VIEW COMPONENTS/PAGES */}
      <CartProvider>
      <Home/> 
      </CartProvider>
    </>
  );
}

export default App;
