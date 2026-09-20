import React, { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  const features = [
    {
      title: "React Components",
      description:
        "Our website is divided into reusable React components for easier development and organization.",
      keyword: "components",
    },
    {
      title: "React Router",
      description:
        "React Router allows users to navigate between different pages without refreshing the entire website.",
      keyword: "router",
    },
    {
      title: "React State",
      description:
        "State allows our application to remember and update information dynamically.",
      keyword: "state",
    },
  ];

  const filteredFeatures = features.filter((feature) =>
    `${feature.title} ${feature.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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

       <section className="features" id="features">

        <div className="section-title">
          <p>WHAT WE USE</p>
          <h2>React Features</h2>
        </div>

        {search && (
          <p className="search-result">
            Searching for: <strong>{search}</strong>
          </p>
        )}

        <div className="feature-container">

          {filteredFeatures.length > 0 ? (
            filteredFeatures.map((feature) => (
              <div className="feature-card" key={feature.title}>

                <div className="feature-icon">
                  ⚛
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No results found</h3>

              <p>
                Try searching for React, Router, Components,
                or State.
              </p>
            </div>
          )}

        </div>

      </section>
    </main>
  );
}

export default HomePage;