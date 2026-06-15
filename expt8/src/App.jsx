import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "15px",
    cursor: "pointer",
    margin: "8px",
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightgray",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "60px 80px",
        textAlign: "center",
        boxShadow: "0 4px 16px gray",
        minWidth: "360px",
      }}>
        <h1>React Counter<br />Application</h1>
        <p style={{ fontSize: "48px", fontWeight: "bold" }}>{count}</p>
        <div>
          <button onClick={increment} style={btnStyle}>Increment (+)</button>
          <button onClick={decrement} style={btnStyle}>Decrement (-)</button>
        </div>
        <div>
          <button onClick={reset} style={btnStyle}>Reset</button>
        </div>
      </div>
    </div>
  );
}