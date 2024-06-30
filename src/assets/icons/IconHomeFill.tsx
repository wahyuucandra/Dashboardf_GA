export default function IconHomeFill({
  width = 25,
  height = 24,
  color = '#2C598D',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none" {...props}>
      <g clipPath="url(#iconHomeFill)">
        <path
          d="M20.9152 6.82L15.1552 2.79C13.5852 1.69 11.1752 1.75 9.66523 2.92L4.65523 6.83C3.65523 7.61 2.86523 9.21 2.86523 10.47V17.37C2.86523 19.92 4.93523 22 7.48523 22H18.2652C20.8152 22 22.8852 19.93 22.8852 17.38V10.6C22.8852 9.25 22.0152 7.59 20.9152 6.82ZM13.6252 18C13.6252 18.41 13.2852 18.75 12.8752 18.75C12.4652 18.75 12.1252 18.41 12.1252 18V15C12.1252 14.59 12.4652 14.25 12.8752 14.25C13.2852 14.25 13.6252 14.59 13.6252 15V18Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="iconHomeFill">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
