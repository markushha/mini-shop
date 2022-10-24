import React from "react";
import Nav from "./components/Nav";
import MyShopPage from "./pages/MyShopPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<MyShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
