const logOutIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#000000"}
      d="M10 0c1.1 0 2 .9 2 2c0 .9-.6 1.7-1.5 1.9V4c.4 0 .7.2 1 .5l1.3 1.3c.1.1.3.2.5.2H15V0z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#000000"}
      d="M11.8 14.5L8 10v2.5c0 .8-.7 1.5-1.5 1.5H3c-.6 0-1-.4-1-1s.4-1 1-1h2.5c.3 0 .5-.2.5-.5v-2c0-.7.1-1.3.4-2L7.1 6h-.8q-.75 0-1.2.6l-.5.7c-.2.4-.7.5-1.2.3c-.4-.3-.6-.9-.2-1.3l.6-.8C4.5 4.5 5.7 4 6.9 4h2l.1-.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2H3v4.9l-.6.8c-.3.4-.5.9-.4 1.5c.1.5.4 1 .9 1.3V11c-1.1 0-2 .9-2 2s.9 2 2 2v1h11.6c-1.1 0-2.1-.6-2.7-1.5"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#000000"}
      d="m11.4 7.3l-.7-.8l-.6 1.5c-.2.5-.3.9 0 1.3l4.9 6.1V8h-2.1c-.6 0-1.1-.2-1.5-.7"
    />
  </svg>
);

export default logOutIcon;
