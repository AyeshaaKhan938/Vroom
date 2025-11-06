'use client'
import { useEffect, useState } from 'react'
import { useModal } from './ModalProvider'

export default function Header() {
  const { openModal } = useModal()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Hero section is 80vh
      
      // Hide main header when scrolled past hero section (events header will show)
      // Show main header when at top or scrolling back up to hero
      if (currentScrollY > heroHeight) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-1 bg-black/80 backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Hamburger Button */}
      <button 
        className="p-2 cursor-pointer" 
        onClick={() => openModal('menu')}
        aria-label="Open menu"
      >
        <img
          src="/assets/images/hamburger.svg"
          alt="Menu"
          className="w-24 h-24 md:w-24 md:h-24"
        />
      </button>

      {/* Logo */}
      <div className="flex-1 flex justify-center">
        <img
          src="/assets/images/Logo.png"
          alt="Vroom Logo"
          className="h-8 md:h-12"
        />
      </div>

      {/* Leaderboard */}
      <button
        className="text-[#FFE0E0] text-lg md:text-xl font-medium tracking-normal cursor-pointer"
        onClick={() => openModal('leaderboard')}
      >
        Leaderboard
      </button>
    </header>
  )
}

