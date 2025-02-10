const slashEyeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "2em"}
    height={props.height || "2em"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "currentColor"}
      d="M10.94 6.08A7 7 0 0 1 12 6c3.18 0 6.17 2.29 7.91 6a15 15 0 0 1-.9 1.64a1 1 0 0 0-.16.55a1 1 0 0 0 1.86.5a16 16 0 0 0 1.21-2.3a1 1 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a8 8 0 0 0-1.4.12a1 1 0 1 0 .34 2ZM3.71 2.29a1 1 0 0 0-1.42 1.42l3.1 3.09a14.6 14.6 0 0 0-3.31 4.8a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Zm6.36 9.19l2.45 2.45A1.8 1.8 0 0 1 12 14a2 2 0 0 1-2-2a1.8 1.8 0 0 1 .07-.52M12 18c-3.18 0-6.17-2.29-7.9-6a12.1 12.1 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18"
    />
  </svg>
);

export default slashEyeIcon;
