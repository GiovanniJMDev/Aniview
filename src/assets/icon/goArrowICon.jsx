const goArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#000000"}
      d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1"
    />
  </svg>
);

export default goArrowIcon;
