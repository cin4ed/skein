import { useState } from "react";

import "./index.css";

function App() {
  const [rects, setRects] = useState<{ x: number; y: number }[]>([]);

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    const svg = e.currentTarget;
    const bounds = svg.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setRects((rects) => [...rects, { x, y }]);
  }

  return (
    <div style={{ height: "100vh" }}>
      <svg
        style={{ width: "100%", height: "100%", display: "block" }}
        onClick={handleClick}
      >
        {rects.map((rect) => (
          <rect x={rect.x} y={rect.y} width="100" height="100" />
        ))}
      </svg>
    </div>
  );
}

export default App;
