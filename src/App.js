import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import {CartProvider} from "react-use-cart"

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Allproducts from "./components/pages/Allproducts";






function App() {
  
  return (
    <>
    {/* THIS IS HOW YOU VIEW COMPONENTS/PAGES */}
    
      <CartProvider>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/all-products" element = {<Allproducts/>}></Route>
        </Routes>
        
      </CartProvider>
    
    </>
  );
}

export default App;
