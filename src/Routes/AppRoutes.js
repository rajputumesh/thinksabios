import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Stock from "../pages/Stock";
import Option from "../pages/Option";
import Crypto from "../pages/Crypto";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/option" element={<Option />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
