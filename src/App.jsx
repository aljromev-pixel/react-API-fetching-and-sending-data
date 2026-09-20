import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProductDetail from "./Components/ProductDetail";
import Footer from "./Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div className="app">

        <header className="navbar">

          <Link to="/" className="logo-link">
            <img
              src={logo}
              alt="React Logo"
              className="react-logo"
            />
            <span>CCS-112</span>
          </Link>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => setSearch("")}>
              {search ? "Clear" : "Search"}
            </button>
          </div>

        </header>

        <Routes>
          <Route
            path="/"
            element={<HomePage search={search} />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;