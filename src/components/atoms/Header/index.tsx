import IconChevronLeft from '@assets/icons/IconChevronLeft'
import Link from 'next/link'
import React from 'react'

interface HeaderProps {
  title: string
  onBack?: () => void
  prevLink?: string
  isBackButtonHide?: boolean
  useLink?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, onBack, prevLink, isBackButtonHide = false, useLink = true }) => {
  return (
    <header className="fixed top-0 w-full z-[100]">
      <div className="bg-white relative w-full max-container h-12 shadow-[-1px_2px_6px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
        <Link
          className={`${isBackButtonHide || !useLink ? 'hidden' : 'absolute'}  top-3 left-4`}
          href={prevLink ?? '/'}
        >
          <IconChevronLeft></IconChevronLeft>
        </Link>

        <button className={`${useLink ? 'hidden' : 'absolute'}  top-3 left-4`} onClick={onBack}>
          <IconChevronLeft></IconChevronLeft>
        </button>

        <div className="text-header text-[#2C598D]">{title || 'Title Here'}</div>
      </div>
    </header>
  )
}

export default Header
