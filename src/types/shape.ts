export type Shape =
  | {
      id: string;
      type: "rectangle";
      x: number;
      y: number;
      width: string;
      height: string;
    }
  | {
      type: "circle";
      x: number;
      y: number;
      radius: number;
    }
  | {
      type: "line";
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }
  | {
      type: "text";
      x: number;
      y: number;
      text: string;
    };
