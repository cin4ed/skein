import { useEditorStore } from "../store/useEditorStore";
import type { Shape } from "../types/shape";

export default function SVGCanvas() {
  const shapes = useEditorStore((s) => s.shapes);
  const activeTool = useEditorStore((s) => s.activeTool);
  const addShape = useEditorStore((s) => s.addShape);

  function handleMouseDown(e: React.MouseEvent<SVGSVGElement>) {
    const { offsetX, offsetY } = e.nativeEvent;
    if (activeTool == "rectangle") {
      console.log("drawing rectangle");
      addShape({
        id: crypto.randomUUID(),
        type: "rectangle",
        x: offsetX,
        y: offsetY,
        width: "100px",
        height: "100px",
      });
    }
  }

  function shapeRenderer(shape: Shape) {
    if (shape.type == "rectangle") {
      return (
        <rect
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
        />
      );
    }
  }

  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", zIndex: 10 }}
      onMouseDown={handleMouseDown}
    >
      {shapes.map((shape) => shapeRenderer(shape))}
    </svg>
  );
}
