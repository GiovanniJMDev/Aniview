const magicianIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "currentColor"}
      d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-304-64l-64-32l64-32l32-64l32 64l64 32l-64 32l-16 32h208l-86.41-201.63a63.96 63.96 0 0 1-1.89-45.45L416 0L228.42 107.19a128 128 0 0 0-53.46 59.15L64 416h144zm64-224l16-32l16 32l32 16l-32 16l-16 32l-16-32l-32-16z"
    />
  </svg>
);

export default magicianIcon;