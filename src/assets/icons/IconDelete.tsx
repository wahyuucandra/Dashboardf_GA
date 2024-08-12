export default function IconDelete({
  width = 28,
  height = 29,
  color = '#FF4040',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="1" width="27" height="27" rx="3.5" fill="white" />
      <rect x="0.5" y="1" width="27" height="27" rx="3.5" stroke={color} />
      <g clipPath="url(#clip0_1977_22947)">
        <path
          d="M16.5 10.5V9.5C16.5 9.23478 16.3946 8.98043 16.2071 8.79289C16.0196 8.60536 15.7652 8.5 15.5 8.5H12.5C12.2348 8.5 11.9804 8.60536 11.7929 8.79289C11.6054 8.98043 11.5 9.23478 11.5 9.5V10.5H9V11.5H10V19C10 19.3978 10.158 19.7794 10.4393 20.0607C10.7206 20.342 11.1022 20.5 11.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V11.5H19V10.5H16.5ZM13.5 17H12.5V14H13.5V17ZM15.5 17H14.5V14H15.5V17ZM15.5 10.5H12.5V9.5H15.5V10.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1977_22947">
          <rect width="12" height="12" fill="white" transform="translate(8 8.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}
