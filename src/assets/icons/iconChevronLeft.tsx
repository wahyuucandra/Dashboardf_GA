export default function IconChevronLeft({
  width = 24,
  height = 24,
  color = '#1C1B1F',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_2670_8470" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2670_8470)">
        <path
          d="M10.7998 12L14.6998 15.9C14.8831 16.0833 14.9748 16.3167 14.9748 16.6C14.9748 16.8833 14.8831 17.1167 14.6998 17.3C14.5165 17.4833 14.2831 17.575 13.9998 17.575C13.7165 17.575 13.4831 17.4833 13.2998 17.3L8.6998 12.7C8.5998 12.6 8.52897 12.4917 8.4873 12.375C8.44564 12.2583 8.4248 12.1333 8.4248 12C8.4248 11.8667 8.44564 11.7417 8.4873 11.625C8.52897 11.5083 8.5998 11.4 8.6998 11.3L13.2998 6.69999C13.4831 6.51665 13.7165 6.42499 13.9998 6.42499C14.2831 6.42499 14.5165 6.51665 14.6998 6.69999C14.8831 6.88332 14.9748 7.11665 14.9748 7.39999C14.9748 7.68332 14.8831 7.91665 14.6998 8.09999L10.7998 12Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
