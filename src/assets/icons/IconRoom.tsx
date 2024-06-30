export default function IconRoom({
  width = 20,
  height = 20,
  color = '#2C598D',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 41 41" fill="none" {...props}>
      <path
        d="M34.0833 32.1667H32.4167V8.83333C32.4167 7.91667 31.6667 7.16667 30.75 7.16667H24.0833C24.0833 6.25 23.3333 5.5 22.4167 5.5H10.75C9.83333 5.5 9.08333 6.25 9.08333 7.16667V32.1667H7.41667C6.5 32.1667 5.75 32.9167 5.75 33.8333C5.75 34.75 6.5 35.5 7.41667 35.5H22.4167C23.3333 35.5 24.0833 34.75 24.0833 33.8333V10.5H29.0833V33.8333C29.0833 34.75 29.8333 35.5 30.75 35.5H34.0833C35 35.5 35.75 34.75 35.75 33.8333C35.75 32.9167 35 32.1667 34.0833 32.1667ZM19.0833 22.1667C18.1667 22.1667 17.4167 21.4167 17.4167 20.5C17.4167 19.5833 18.1667 18.8333 19.0833 18.8333C20 18.8333 20.75 19.5833 20.75 20.5C20.75 21.4167 20 22.1667 19.0833 22.1667Z"
        fill={color}
      />
    </svg>
  )
}
