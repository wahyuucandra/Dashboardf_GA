export default function IconUser({
  width = 25,
  height = 24,
  color = '#484C52',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none" {...props}>
      <g clipPath="url(#iconUser)">
        <path
          d="M12.125 12C14.8864 12 17.125 9.76142 17.125 7C17.125 4.23858 14.8864 2 12.125 2C9.36358 2 7.125 4.23858 7.125 7C7.125 9.76142 9.36358 12 12.125 12Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7151 22C20.7151 18.13 16.8652 15 12.1252 15C7.38515 15 3.53516 18.13 3.53516 22"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="iconUser">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
