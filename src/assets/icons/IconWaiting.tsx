export default function IconWaiting({ width = 180, height = 180, ...props }: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 179 178" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="mask0_1953_22709"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect x="0.5" width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1953_22709)">
        <circle cx="85.5" cy="88.5" r="70.5" fill="url(#paint0_linear_1953_22709)" />
        <path
          d="M84.5 58.25V43.125M84.5 133.875V123.792M119.792 88.5H129.875M39.125 88.5H54.25M113.021 59.9793L116.585 56.4148M52.4148 120.585L59.5438 113.456M109.456 113.456L116.585 120.585M52.4148 56.4148L63.1082 67.1082"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1953_22709" x1="15" y1="18" x2="15" y2="159" gradientUnits="userSpaceOnUse">
          <stop stopColor="#103558" />
          <stop offset="1" stopColor="#2F729D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
