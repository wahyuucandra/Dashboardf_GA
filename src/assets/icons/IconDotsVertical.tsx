export default function IconDotsVertical({
  width = 18,
  height = 18,
  color = '#252525',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.00002 3.00002C9.82845 3.00002 10.5 2.32845 10.5 1.50001C10.5 0.671578 9.82845 0 9.00002 0C8.17158 0 7.5 0.671578 7.5 1.50001C7.5 2.32845 8.17158 3.00002 9.00002 3.00002Z"
        fill={color}
      />
      <path
        d="M9.00002 10.5C9.82845 10.5 10.5 9.82845 10.5 9.00002C10.5 8.17158 9.82845 7.5 9.00002 7.5C8.17158 7.5 7.5 8.17158 7.5 9.00002C7.5 9.82845 8.17158 10.5 9.00002 10.5Z"
        fill={color}
      />
      <path
        d="M9.00002 18C9.82845 18 10.5 17.3285 10.5 16.5C10.5 15.6716 9.82845 15 9.00002 15C8.17158 15 7.5 15.6716 7.5 16.5C7.5 17.3285 8.17158 18 9.00002 18Z"
        fill={color}
      />
    </svg>
  )
}
