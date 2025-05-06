import "./index.css";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <svg style={{ width: "100%", height: "100%", display: "block" }}>
        <rect width="100" height="100" x="100" y="100" />
        <circle cx="300" cy="150" r="50" />
        <line x1="100" y1="250" x2="350" y2="250" stroke="black" />
      </svg>
    </div>
  );
}

export default App;
