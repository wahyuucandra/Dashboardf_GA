export default function IconButtonMinus({
  width = 24,
  height = 24,
  color = '#0089CF',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke={color} />
      <path
        d="M7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8947 6.73478 13 7 13H17C17.2652 13 17.5196 12.8947 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H7Z"
        fill={color}
      />
    </svg>
  )
}
