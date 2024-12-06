const caneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "currentColor"}
      fillRule="evenodd"
      d="M6.469 2.5a1 1 0 0 0-1 1v.25a1.25 1.25 0 1 1-2.5 0V3.5a3.5 3.5 0 1 1 7 0v9.25a1.25 1.25 0 1 1-2.5 0V3.5a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);

export default caneIcon;
