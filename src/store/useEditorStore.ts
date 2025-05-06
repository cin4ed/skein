import { create } from "zustand";

import type { Tool } from "../types/tool";
import type { Shape } from "../types/shape";

interface EditorState {
  activeTool: Tool;
  setActiveTool: (tool: Tool) => void;
  shapes: Shape[];
  addShape: (shapes: Shape) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  activeTool: "rectangle",
  setActiveTool: (tool) => set({ activeTool: tool }),
  shapes: [],
  addShape: (shape) => set((state) => ({ shapes: [...state.shapes, shape] })),
}));
