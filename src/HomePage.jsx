import React, { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">Welcome to my React Webpage</p>

          <h1>
            CCS-112
            <br />
            <span>React App</span>
          </h1>

          <p className="hero-description">
            A simple React application demonstrating components,
            React Router, and state management.
          </p>

          <div className="hero-buttons">
            <a href="#counter" className="primary-button">
              Try Our App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;