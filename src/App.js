import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Awards from "./pages/Awards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </div>
  );
}

export default App;
