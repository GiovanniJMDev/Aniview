const micIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "2em"}
    height={props.height || "1.5em"}
    viewBox="0 0 17 24"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "currentColor"}
      d="M8.4 16.8a4.805 4.805 0 0 0 4.8-4.8V4.8a4.8 4.8 0 1 0-9.6 0V12a4.805 4.805 0 0 0 4.8 4.8"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "currentColor"}
      d="M16.8 12V9.6a1.2 1.2 0 1 0-2.4 0V12a6 6 0 1 1-12 0V9.6a1.2 1.2 0 1 0-2.4 0V12a8.406 8.406 0 0 0 7.154 8.298l.046.006V21.6H3.6a1.2 1.2 0 1 0 0 2.4h9.6a1.2 1.2 0 1 0 0-2.4H9.6v-1.296c4.09-.609 7.193-4.093 7.2-8.303z"
    />
  </svg>
);

export default micIcon;
