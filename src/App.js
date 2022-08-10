import React, { useEffect } from "react";
import "./App.css";
import "animate.css";
import Home from "./pages/home";
import ProductsPage from "./pages/ProductsPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
