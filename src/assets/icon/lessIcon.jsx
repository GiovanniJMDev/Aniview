const lessIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "2em"}
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
      strokeWidth="1.5"
      d="M3.75 12h16.5"
    />
  </svg>
);

export default lessIcon;
