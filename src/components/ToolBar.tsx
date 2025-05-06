import {
  SquareIcon,
  CircleIcon,
  TextIcon,
  MinusIcon,
  CursorArrowIcon,
} from "@radix-ui/react-icons";

import { Flex, IconButton, Tooltip, Separator } from "@radix-ui/themes";
import { useState } from "react";

type Tool = "cursor" | "rectangle" | "circle" | "line" | "text";

const tools = [
  {
    icon: CursorArrowIcon,
    label: "Cursor",
    tool: "cursor",
  },
  {
    icon: SquareIcon,
    label: "Rectangle",
    tool: "rectangle",
  },
  {
    icon: CircleIcon,
    label: "Circle",
    tool: "circle",
  },
  {
    icon: MinusIcon,
    label: "Line",
    tool: "line",
  },
  {
    icon: TextIcon,
    label: "Text",
    tool: "text",
  },
];

export default function ToolBar() {
  const [activeTool, setActiveTool] = useState<Tool>("cursor");

  return (
    <Flex
      align="center"
      height="32px"
      gap="2"
      px="2"
      py="3"
      style={{
        backgroundColor: "var(--gray-1)",
        position: "fixed",
        top: 10,
        left: 0,
        right: 0,
        width: "fit-content",
        margin: "0 auto",
        boxShadow: "inset 0 0 0 1px var(--gray-a6)",
        borderRadius: "var(--radius-3)",
      }}
    >
      {tools.flatMap((tool, idx) => [
        <Tooltip key={tool.tool} content={tool.label}>
          <IconButton
            variant="ghost"
            highContrast
            color="gray"
            size="1"
            onClick={() => setActiveTool(tool.tool as Tool)}
            style={{
              backgroundColor:
                tool.tool === activeTool ? "var(--gray-4)" : "transparent",
            }}
          >
            <Flex align="center" justify="center">
              <tool.icon />
            </Flex>
          </IconButton>
        </Tooltip>,
        idx < tools.length - 1 ? (
          <Separator key={`sep-${tool.tool}`} orientation="vertical" />
        ) : null,
      ])}
    </Flex>
  );
}
