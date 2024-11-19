const microsoftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "1.5em"}
    height={props.height || "1.5em"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#F1511B"}
      d="M121.666 121.666H0V0h121.666z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#80CC28"}
      d="M256 121.666H134.335V0H256z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#00ADEF"}
      d="M121.663 256.002H0V134.336h121.663z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#FBBC09"}
      d="M256 256.002H134.335V134.336H256z"
    />
  </svg>
);

export default microsoftIcon;
