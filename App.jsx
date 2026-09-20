import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">My Website</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section id="home">
          <HomePage />
        </section>

        <section id="about">
          <AboutPage />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;