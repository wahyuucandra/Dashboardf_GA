export default function IconNotification({
  width = 20,
  height = 20,
  color = '#404040',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#iconNotification)">
        <path
          d="M5.158 11.491C5.085 12.887 5.169 14.373 3.922 15.308C3.63531 15.5225 3.40266 15.8011 3.24259 16.1214C3.08253 16.4417 2.99946 16.7949 3 17.153C3 18.15 3.782 19 4.8 19H19.2C20.218 19 21 18.15 21 17.153C21 16.427 20.658 15.743 20.078 15.308C18.831 14.373 18.915 12.887 18.842 11.491C18.752 9.73709 17.9919 8.08471 16.7186 6.8751C15.4454 5.6655 13.7562 4.99106 12 4.99106C10.2438 4.99106 8.55462 5.6655 7.28136 6.8751C6.0081 8.08471 5.24799 9.73709 5.158 11.491Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 19C15 19.7956 14.6839 20.5587 14.1213 21.1213C13.5587 21.6839 12.7956 22 12 22C11.2044 22 10.4413 21.6839 9.87868 21.1213C9.31607 20.5587 9 19.7956 9 19M10.5 3.125C10.5 3.953 11.172 5 12 5C12.828 5 13.5 3.953 13.5 3.125C13.5 2.297 12.828 2 12 2C11.172 2 10.5 2.297 10.5 3.125Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id="iconNotification">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
