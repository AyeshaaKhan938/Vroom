'use client'
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import Modal from './Modal'
import Link from 'next/link'
import { getJson } from '@/lib/api'

type ModalType = 'menu' | 'leaderboard' | null

type ModalContextType = {
  openModal: (type: ModalType) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ModalType>(null)

  // Leaderboard state
  type LeaderboardEntry = {
    id: number
    rank: number
    lap_time: string
    driver_name: string
    car: string
    weather: string
    setup: 'Stock' | 'Tuned'
    tire_type: string
  }

  const [loadingLb, setLoadingLb] = useState(false)
  const [errorLb, setErrorLb] = useState<string | null>(null)
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (active !== 'leaderboard') return
      setLoadingLb(true)
      setErrorLb(null)
      try {
        const data = await getJson<LeaderboardEntry[]>('/leaderboard')
        if (!cancelled) setEntries(data)
      } catch (e: any) {
        if (!cancelled) setErrorLb(e?.message || 'Failed to load leaderboard')
      } finally {
        if (!cancelled) setLoadingLb(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [active])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return entries
    return entries.filter((e) =>
      e.driver_name.toLowerCase().includes(q) ||
      e.car.toLowerCase().includes(q)
    )
  }, [entries, searchQuery])

  const openModal = (type: ModalType) => setActive(type)
  const closeModal = () => setActive(null)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* Menu Modal */}
      <Modal isOpen={active === 'menu'} onClose={closeModal}>
        <div className="w-full h-full text-white px-6 md:px-8 py-4 flex flex-col">
          <div className="flex items-center justify-between">
            <button 
              className="p-2 cursor-pointer" 
              style={{ cursor: 'pointer' }}
              onClick={closeModal} 
              aria-label="Close menu"
            >
              <img src="/assets/images/cross-icon.svg" alt="Close" className="w-30 h-30 md:w-30 md:h-30 pointer-events-none" />
            </button>
            <div className="flex-1 flex justify-center">
              <img src="/assets/images/Logo.png" alt="Vroom Logo" className="h-8 md:h-12" />
            </div>
            <button 
              onClick={() => openModal('leaderboard')} 
              className="text-[#FFE0E0] text-sm md:text-base tracking-normal cursor-pointer"
              style={{ cursor: 'pointer' }}
            >
              Leaderboard
            </button>
          </div>

          <div className="h-6 md:h-10" />
          <nav className="flex-1 flex flex-col gap-2 text-3xl md:text-5xl font-light">
            <a href="/events" className="hover:tracking-widest button-font transition-all">Events</a>
            <Link
    href="/experiences"
    className="hover:tracking-widest button-font transition-all"
    onClick={closeModal}
  >
    Experience
  </Link>
            <div className="mt-2 flex flex-col gap-3 text-lg button-font md:text-3xl font-light">
               <a href="/events">Upcoming Events</a>
              <a href="/host-an-event">Host an Event</a>
               <a href="/past-an-event">Past an Event</a>
              <a href="/about-track">About Track</a>
              <a href="/media-and-community">Media and Community</a>
             
            </div>
            <div className="mt-6 flex flex-col gap-3 text-lg md:text-3xl font-light">
              <a href="/" className="mt-auto text-[#FFE0E0] text-3xl md:text-5xl">Home</a>
            </div>
          </nav>
        </div>
      </Modal>

      {/* Leaderboard Modal */}
      <Modal isOpen={active === 'leaderboard'} onClose={closeModal}>
        <div className="w-full h-full text-white px-6 md:px-10 flex flex-col overflow-auto">
          <div className="flex items-center justify-between py-2">
            <button 
              className="p-2 cursor-pointer" 
              style={{ cursor: 'pointer' }}
              onClick={closeModal} 
              aria-label="Close leaderboard"
            >
              <img src="/assets/images/cross-icon.svg" alt="Close" className="w-30 h-30 md:w-30 md:h-30 pointer-events-none" />
            </button>
            <div className="flex-1 flex justify-center">
              <img src="/assets/images/Logo.png" alt="Vroom Logo" className="h-8 md:h-12" />
            </div>
            <div className="w-0" />
          </div>

          <div className="mx-4 md:mx-20">
            <h2 className="text-2xl md:text-4xl">Global Leaderboard</h2>
            <p className="mt-2 button-font text-sm md:text-base opacity-80 max-w-2xl">
              Track your progress and see how you stack up against the best drivers on the track
            </p>

            <div className="mt-6">
              <div className="flex items-center bg-white/90 button-font text-black rounded-md px-3 py-3 w-full max-w-5xl">
                <img src="/assets/images/search.svg" alt="Search" className="w-5 h-5" />
                <input
                  className="bg-transparent ml-1 border-l-2 text-black outline-none w-full"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center button-font gap-4 mt-4 flex-wrap">
              <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer" style={{ cursor: 'pointer' }}>All-Time<img src="/assets/images/dropdown.svg" alt="Dropdown" className="w-4 h-4" /></button>
              <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer" style={{ cursor: 'pointer' }}>Manufacturer<img src="/assets/images/dropdown.svg" alt="Dropdown" className="w-4 h-4" /></button>
              <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer" style={{ cursor: 'pointer' }}>Tire Type<img src="/assets/images/dropdown.svg" alt="Dropdown" className="w-4 h-4" /></button>
              <img src="/assets/images/filter.svg" alt="Filter" className="w-6 h-6 ml-auto cursor-pointer" style={{ cursor: 'pointer' }} />
            </div>

            <div className="mt-6 overflow-auto button-font">
              <div className="min-w-[900px] bg-white/10 rounded-md">
                <div className="grid grid-cols-7 gap-4 bg-[#362F2F] px-6 py-4 border-b border-white text-2xl md:text-2xl">
                  <div>Rank</div>
                  <div>Lap Time</div>
                  <div>Driver</div>
                  <div>Car</div>
                  <div>Weather</div>
                  <div>Stock/Tuned</div>
                  <div>Tire Type</div>
                </div>
                {loadingLb && (
                  <div className="px-6 py-4">Loading...</div>
                )}
                {errorLb && !loadingLb && (
                  <div className="px-6 py-4 text-red-400">{errorLb}</div>
                )}
                {!loadingLb && !errorLb && filtered.map((row) => (
                  <div key={row.id} className="grid grid-cols-7 gap-4 px-6 py-4 bg-black border-b border-white text-sm md:text-base">
                    <div>{row.rank}</div>
                    <div>{row.lap_time}</div>
                    <div>{row.driver_name}</div>
                    <div>{row.car}</div>
                    <div>{row.weather}</div>
                    <div>{row.setup}</div>
                    <div>{row.tire_type}</div>
                  </div>
                ))}
                {!loadingLb && !errorLb && filtered.length === 0 && (
                  <div className="px-6 py-4">No results</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </ModalContext.Provider>
  )
}


