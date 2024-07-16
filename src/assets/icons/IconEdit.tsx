export default function IconEdit({ width = 28, height = 29, ...props }: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="1" width="27" height="27" rx="3.5" fill="white" />
      <rect x="0.5" y="1" width="27" height="27" rx="3.5" stroke="#0089CF" />
      <g clipPath="url(#clip0_1977_22945)">
        <path d="M15.302 11.3438L8 18.6453V20.5002H9.855L17.1565 13.1983L15.302 11.3438Z" fill="#0089CF" />
        <path
          d="M19.6157 8.88405C19.3697 8.63814 19.0361 8.5 18.6882 8.5C18.3404 8.5 18.0068 8.63814 17.7607 8.88405L16.0107 10.6366L17.8652 12.4911L19.6152 10.7411C19.7373 10.6192 19.8342 10.4745 19.9003 10.3152C19.9664 10.1559 20.0005 9.98513 20.0005 9.81266C20.0006 9.64018 19.9666 9.46938 19.9006 9.31004C19.8346 9.1507 19.7378 9.00594 19.6157 8.88405Z"
          fill="#0089CF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1977_22945">
          <rect width="12" height="12" fill="white" transform="translate(8 8.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}
