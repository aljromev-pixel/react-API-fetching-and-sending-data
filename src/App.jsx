import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Homepage";
import AboutPage from "./Aboutpage";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <div className="logo">CCS-112</div>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;