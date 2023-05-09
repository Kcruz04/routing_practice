import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path= "/" element={<h1>Welcome</h1>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
