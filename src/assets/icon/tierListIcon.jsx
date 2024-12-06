const tierListIconIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 24 24"
    {...props}
    style={{ transform: "rotate(180deg)" }}
  >
    <g
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "none"}
      stroke={props.stroke || "#000000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M15 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 9H3m18 6H3" />
    </g>
  </svg>
);

export default tierListIconIcon;
