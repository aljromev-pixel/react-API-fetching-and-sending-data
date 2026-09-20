import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Homepage";
import AboutPage from "./Aboutpage";
import Footer from "./Footer";

function App() {
    const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <div className="logo">CCS-112</div>

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

          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;