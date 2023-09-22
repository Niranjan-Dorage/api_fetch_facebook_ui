import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homelogin from "./Homelogin.jsx";
import Fetch from "./fetchapis/Fetch.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homelogin />}></Route>
        <Route path="/fetch" element={<Fetch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
