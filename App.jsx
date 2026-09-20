import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-logo">My Website</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;