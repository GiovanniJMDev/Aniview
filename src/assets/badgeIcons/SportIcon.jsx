const sportIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "none"}
      stroke={props.stroke || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M3 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
      <path d="M6 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
    </g>
  </svg>
);

export default sportIcon;
