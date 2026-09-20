import React from "react";

function AboutPage() {
  return (
    <section
      id="about"
      style={{
        minHeight: "60vh",
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
        About Us
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#555",
        }}
      >
        This application was created using React. It demonstrates how
        components can be separated into different files and combined
        together to create a complete webpage.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "220px",
            padding: "25px",
            borderRadius: "10px",
            backgroundColor: "#f5f7fa",
          }}
        >
          <h3>Simple</h3>
          <p>Easy-to-understand React components.</p>
        </div>

        <div
          style={{
            width: "220px",
            padding: "25px",
            borderRadius: "10px",
            backgroundColor: "#f5f7fa",
          }}
        >
          <h3>Modern</h3>
          <p>Built with modern React development practices.</p>
        </div>

        <div
          style={{
            width: "220px",
            padding: "25px",
            borderRadius: "10px",
            backgroundColor: "#f5f7fa",
          }}
        >
          <h3>Responsive</h3>
          <p>Designed to work on different screen sizes.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;