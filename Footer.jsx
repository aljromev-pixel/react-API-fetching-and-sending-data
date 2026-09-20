import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        textAlign: "center",
        padding: "25px 20px",
      }}
    >
      <p style={{ margin: "0" }}>
        © 2026 My React App. All Rights Reserved.
      </p>

      <p
        style={{
          marginTop: "8px",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        Built with React
      </p>
    </footer>
  );
}

export default Footer;