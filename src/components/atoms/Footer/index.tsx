import React from 'react'

interface FooterProps {
  children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="fixed bottom-0 w-full z-[102]">
      <div className="bg-white relative w-full max-container flex items-center justify-center bg-[#000000]">
        {children}
      </div>
    </footer>
  )
}

export default Footer
