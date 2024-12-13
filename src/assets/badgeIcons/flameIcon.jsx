const flameIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 12 16"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7c-2.2-1.16-2.67-4.52-.3-6.61c-.61 2.03.53 3.33 1.94 2.86c1.39-.47 2.3.53 2.27 1.67c-.02.78-.31 1.44-1.13 1.81c3.42-.59 4.78-3.42 4.78-5.56c0-2.84-2.53-3.22-1.25-5.61c-1.52.13-2.03 1.13-1.89 2.75c.09 1.08-1.02 1.8-1.86 1.33c-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
      fill={props.fill || "currentColor"}
    />
  </svg>
);

export default flameIcon;