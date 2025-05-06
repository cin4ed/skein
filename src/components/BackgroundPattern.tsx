export default function BackgroundPattern() {
  return (
    <svg
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dottedGrid"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.15)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dottedGrid)" />
    </svg>
  );
}
