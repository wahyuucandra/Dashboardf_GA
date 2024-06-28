'use client'

export function Modal({
  children,
  isOpen,
  backdropDismiss = false,
  backdropClick,
  ...props
}: {
  readonly children: React.ReactElement
  isOpen: boolean
  backdropDismiss?: boolean
  backdropClick?: any
}) {
  return (
    <>
      <div
        onClick={() => backdropClick()}
        className={`${
          backdropDismiss || !isOpen ? 'hidden' : ''
        } w-[999] fixed top-0 h-screen w-screen bg-gray-950 opacity-40`}
      ></div>
      <div
        onClick={e => {
          backdropClick()
        }}
        className={`w-[1000] h-1/2 duration-300 transition-transform fixed bottom-0 left-0 right-0 w-full flex items-center justify-center ${
          isOpen ? '-translate-y-1/2' : 'translate-y-full'
        }`}
      >
        <div onClick={e => e.stopPropagation()}>{children}</div>
      </div>
    </>
  )
}
