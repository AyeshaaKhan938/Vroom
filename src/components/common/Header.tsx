'use client'
import { useModal } from './ModalProvider'

export default function Header() {
  const { openModal } = useModal()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6  bg-black/60 backdrop-blur-sm transition-all duration-300"
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
        className="text-[#FFE0E0] text-lg md:text-xl font-medium tracking-normal cursor-pointer hover:text-white transition-colors"
        onClick={() => openModal('leaderboard')}
      >
        Leaderboard
      </button>
    </header>
  )
}
