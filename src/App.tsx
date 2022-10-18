import React from "react";
import Nav from "./components/Nav";
import MyShopPage from "./pages/MyShopPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<MyShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  );
}

export default App;
