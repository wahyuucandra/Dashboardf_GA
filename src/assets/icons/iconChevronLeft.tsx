export default function IconChevronLeft({
  width = 20,
  height = 20,
  color = '#1C1B1F',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#iconChevronLeft)">
        <path
          d="M2.7998 5.99999L6.6998 9.89999C6.88314 10.0833 6.9748 10.3167 6.9748 10.6C6.9748 10.8833 6.88314 11.1167 6.6998 11.3C6.51647 11.4833 6.28314 11.575 5.9998 11.575C5.71647 11.575 5.48314 11.4833 5.2998 11.3L0.699805 6.69999C0.599805 6.59999 0.528971 6.49165 0.487305 6.37499C0.445638 6.25832 0.424805 6.13332 0.424805 5.99999C0.424805 5.86665 0.445638 5.74165 0.487305 5.62499C0.528971 5.50832 0.599805 5.39999 0.699805 5.29999L5.2998 0.699988C5.48314 0.516654 5.71647 0.424988 5.9998 0.424988C6.28314 0.424988 6.51647 0.516654 6.6998 0.699988C6.88314 0.883321 6.9748 1.11665 6.9748 1.39999C6.9748 1.68332 6.88314 1.91665 6.6998 2.09999L2.7998 5.99999Z"
          fill={color}
        />
      </g>

      <defs>
        <clipPath id="iconChevronLeft">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
