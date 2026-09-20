import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <nav className="navbar">
        <img src="/logo.svg" alt="React Logo" className="react-logo" />

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