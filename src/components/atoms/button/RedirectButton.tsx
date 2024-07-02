import React from 'react'
import { Icon } from '@assets/icons'

interface Props {
  open?: (index: number) => void
  index: number
}

const RedirectButton: React.FC<Props> = ({ open, index }) => {
  return (
    <Icon
      name="direct"
      className="max-w-[32px] max-h-[32px] cursor-pointer"
      onClick={() => {
        open?.(index)
      }}
    />
  )
}

export default RedirectButton
