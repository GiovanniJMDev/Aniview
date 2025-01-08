const plusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "none"}
      stroke={props.stroke || "#000000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h7m7 0h-7m0 0V5m0 7v7"
    />
  </svg>
);

export default plusIcon;
