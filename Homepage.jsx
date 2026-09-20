import React, { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>CCS-112 React Project</h1>

      <p>Welcome to our React application!</p>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default HomePage;