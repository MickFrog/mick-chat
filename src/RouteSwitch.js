import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp/SignUp";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/chat" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
