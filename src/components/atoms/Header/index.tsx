import IconChevronLeft from '@assets/icons/IconChevronLeft'
import Link from 'next/link'
import React from 'react'

interface HeaderProps {
  title: string
  onBack?: () => void
  prevLink?: string
  isBackButtonHide?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, onBack, prevLink, isBackButtonHide = false }) => {
  return (
    <>
      <header className="bg-white fixed top-0 left-0 w-full z-[100] h-12 shadow-[1px_2px_6px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
        <Link className={`${isBackButtonHide ? 'hidden' : 'absolute'}  top-3 left-4`} href={prevLink || '/'}>
          <IconChevronLeft></IconChevronLeft>
        </Link>

        <div className="text-header text-[#2C598D]">{title || 'Title Here'}</div>
      </header>
    </>
  )
}

export default Header
