import { useState } from "react";
import Navbar from "./components/Navbar";
import Videocard from "./components/Videocard";
import { Videogrid } from "./components/Videogrid";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Afterclick } from "./components/Afterclick";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/video" element={<Afterclick/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
