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
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  
  // Filter state
  const [timePeriod, setTimePeriod] = useState<string>('All-Time')
  const [manufacturer, setManufacturer] = useState<string>('')
  const [tireType, setTireType] = useState<string>('')
  const [setup, setSetup] = useState<string>('')
  
  // Dropdown open/close state
  const [timePeriodOpen, setTimePeriodOpen] = useState(false)
  const [manufacturerOpen, setManufacturerOpen] = useState(false)
  const [tireTypeOpen, setTireTypeOpen] = useState(false)

  // Extra filter panel (triggered by filter icon)
  const [filterPanelOpen, setFilterPanelOpen] = useState(false)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300) // 300ms delay

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Reset filters when modal closes
  useEffect(() => {
    if (active !== 'leaderboard') {
      setSearchQuery('')
      setDebouncedSearchQuery('')
      setTimePeriod('All-Time')
      setManufacturer('')
      setTireType('')
      setSetup('')
    }
  }, [active])

  // Available filter options
  const timePeriodOptions = ['All-Time', 'This Week', 'This Month', 'This Year']
  const manufacturerOptions = ['BMW', 'Porsche', 'Nissan', 'Mercedes', 'Audi', 'Ferrari', 'Lamborghini']
  const tireTypeOptions = ['Slick', 'Wet', 'Semi-Slick', 'Street']

  useEffect(() => {
    let cancelled = false

    async function load() {
      if (active !== 'leaderboard') return

      setLoadingLb(true)
      setErrorLb(null)

      try {
        // Build query parameters
        const params = new URLSearchParams()
        if (debouncedSearchQuery.trim()) {
          params.append('q', debouncedSearchQuery.trim())
        }
        if (manufacturer) {
          params.append('manufacturer', manufacturer)
        }
        if (tireType) {
          params.append('tire_type', tireType)
        }
        if (setup) {
          params.append('setup', setup)
        }

        const url = `/leaderboard${params.toString() ? `?${params.toString()}` : ''}`
        const data = await getJson<LeaderboardEntry[]>(url)
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
  }, [active, debouncedSearchQuery, manufacturer, tireType, setup])

  // Close dropdowns when modal closes, and on Escape key
  useEffect(() => {
    if (active !== 'leaderboard') {
      setTimePeriodOpen(false)
      setManufacturerOpen(false)
      setTireTypeOpen(false)
      return
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setTimePeriodOpen(false)
        setManufacturerOpen(false)
        setTireTypeOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active])

  const filtered = entries // Already filtered by backend, but kept for consistency

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
              onClick={closeModal}
              aria-label="Close menu"
            >
              <img
                src="/assets/images/cross-icon.svg"
                alt="Close"
                className="w-30 h-30 md:w-30 md:h-30 pointer-events-none"
              />
            </button>

            <div className="flex-1 flex justify-center">
              <img
                src="/assets/images/Logo.png"
                alt="Vroom Logo"
                className="h-8 md:h-12"
              />
            </div>

            <button
              onClick={() => openModal('leaderboard')}
              className="text-[#FFE0E0] text-sm md:text-base tracking-normal cursor-pointer"
            >
              Leaderboard
            </button>
          </div>

          <div className="h-6 md:h-10" />

          <nav className="flex-1 flex flex-col gap-2 text-3xl md:text-5xl font-light">
            <a
              href="/"
              className="hover:tracking-widest button-font transition-all"
            >
              Home
            </a>

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
              <a href="/register-as-racer" className="mt-auto text-[#FFE0E0] text-3xl md:text-5xl">
                Register as Racer
              </a>
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
              onClick={closeModal}
              aria-label="Close leaderboard"
            >
              <img
                src="/assets/images/cross-icon.svg"
                alt="Close"
                className="w-30 h-30 md:w-30 md:h-30 pointer-events-none"
              />
            </button>

            <div className="flex-1 flex justify-center">
              <img
                src="/assets/images/Logo.png"
                alt="Vroom Logo"
                className="h-8 md:h-12"
              />
            </div>

            <div className="w-0" />
          </div>

          <div className="mx-4 md:mx-20">
            <h2 className="text-2xl md:text-4xl">Global Leaderboard</h2>
            <p className="mt-2 button-font text-sm md:text-base opacity-80 max-w-2xl">
              Track your progress and see how you stack up against the best drivers
              on the track
            </p>

            <div className="mt-6">
              <div className="flex items-center bg-white/90 button-font text-black rounded-md px-3 py-3 w-full max-w-5xl">
                <img src="/assets/images/search.svg" alt="Search" className="w-5 h-5" />
                <input
                  className="bg-transparent ml-1  text-black outline-none w-full"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center button-font gap-4 mt-4 flex-wrap relative">
              {/* Time Period Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => {
                    setTimePeriodOpen(!timePeriodOpen)
                    setManufacturerOpen(false)
                    setTireTypeOpen(false)
                    setFilterPanelOpen(false)
                  }}
                  className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer min-w-[120px] justify-between"
                  style={{ cursor: 'pointer' }}
                >
                  <span>{timePeriod}</span>
                  <img src="/assets/images/dropdown.svg" alt="Dropdown" className="w-4 h-4 pointer-events-none" />
                </button>
                {timePeriodOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white text-black rounded-md shadow-lg z-50 min-w-[160px]">
                    {timePeriodOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setTimePeriod(option)
                          setTimePeriodOpen(false)
                          // Note: Time period filter not implemented in backend yet
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        style={{ cursor: 'pointer' }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Manufacturer Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => {
                    setManufacturerOpen(!manufacturerOpen)
                    setTimePeriodOpen(false)
                    setTireTypeOpen(false)
                    setFilterPanelOpen(false)
                  }}
                  className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer min-w-[140px] justify-between"
                  style={{ cursor: 'pointer' }}
                >
                  <span>{manufacturer || 'Manufacturer'}</span>
                  <img src="/assets/images/dropdown.svg" alt="Dropdown" className="w-4 h-4 pointer-events-none" />
                </button>
                {manufacturerOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white text-black rounded-md shadow-lg z-50 min-w-[180px] max-h-56 overflow-y-auto">
                    <button
                      onClick={() => {
                        setManufacturer('')
                        setManufacturerOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      style={{ cursor: 'pointer' }}
                    >
                      All Manufacturers
                    </button>
                    {manufacturerOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setManufacturer(option)
                          setManufacturerOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        style={{ cursor: 'pointer' }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tire Type Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => {
                    setTireTypeOpen(!tireTypeOpen)
                    setTimePeriodOpen(false)
                    setManufacturerOpen(false)
                    setFilterPanelOpen(false)
                  }}
                  className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer min-w-[120px] justify-between"
                  style={{ cursor: 'pointer' }}
                >
                  <span>{tireType || 'Tire Type'}</span>
                  <img src="/assets/images/dropdown.svg" alt="Dropdown" className="w-4 h-4 pointer-events-none" />
                </button>
                {tireTypeOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white text-black rounded-md shadow-lg z-50 min-w-[160px]">
                    <button
                      onClick={() => {
                        setTireType('')
                        setTireTypeOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      style={{ cursor: 'pointer' }}
                    >
                      All Tire Types
                    </button>
                    {tireTypeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setTireType(option)
                          setTireTypeOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        style={{ cursor: 'pointer' }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Setup Filter (Stock/Tuned) - Using a simple toggle button */}
              {setup && (
                <button
                  onClick={() => setSetup('')}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
                  style={{ cursor: 'pointer' }}
                >
                  {setup}
                  <span className="ml-2">×</span>
                </button>
              )}

              {/* Filter Reset Button */}
              {(manufacturer || tireType || setup) && (
                <button
                  onClick={() => {
                    setManufacturer('')
                    setTireType('')
                    setSetup('')
                    setTimePeriod('All-Time')
                  }}
                  className="text-white px-4 py-2 rounded-md cursor-pointer hover:underline"
                  style={{ cursor: 'pointer' }}
                >
                  Clear Filters
                </button>
              )}

              {/* Filter icon toggles quick filters panel */}
              <div className="relative ml-auto">
                <img
                  src="/assets/images/filter.svg"
                  alt="Filter"
                  className="w-6 h-6 cursor-pointer"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setFilterPanelOpen((v) => !v)
                    setTimePeriodOpen(false)
                    setManufacturerOpen(false)
                    setTireTypeOpen(false)
                  }}
                />
                {filterPanelOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white text-black rounded-md shadow-xl z-50 w-64 p-3">
                    <div className="font-medium text-sm mb-2">Quick Filters</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Setup</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSetup(setup === 'Stock' ? '' : 'Stock')}
                            className={`px-2 py-1 text-sm rounded ${setup === 'Stock' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            style={{ cursor: 'pointer' }}
                          >
                            Stock
                          </button>
                          <button
                            onClick={() => setSetup(setup === 'Tuned' ? '' : 'Tuned')}
                            className={`px-2 py-1 text-sm rounded ${setup === 'Tuned' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            style={{ cursor: 'pointer' }}
                          >
                            Tuned
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Manufacturer</span>
                        <select
                          value={manufacturer}
                          onChange={(e) => setManufacturer(e.target.value)}
                          className="text-sm bg-white border rounded px-2 py-1"
                        >
                          <option value="">All</option>
                          {manufacturerOptions.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Tire Type</span>
                        <select
                          value={tireType}
                          onChange={(e) => setTireType(e.target.value)}
                          className="text-sm bg-white border rounded px-2 py-1"
                        >
                          <option value="">All</option>
                          {tireTypeOptions.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          onClick={() => {
                            setManufacturer('')
                            setTireType('')
                            setSetup('')
                            setTimePeriod('All-Time')
                          }}
                          className="text-sm px-3 py-1 rounded bg-gray-200"
                          style={{ cursor: 'pointer' }}
                        >
                          Reset
                        </button>
                        <button
                          onClick={() => setFilterPanelOpen(false)}
                          className="text-sm px-3 py-1 rounded bg-black text-white"
                          style={{ cursor: 'pointer' }}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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

                {loadingLb && <div className="px-6 py-4">Loading...</div>}
                {errorLb && !loadingLb && (
                  <div className="px-6 py-4 text-red-400">{errorLb}</div>
                )}

                {!loadingLb &&
                  !errorLb &&
                  filtered.map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-7 gap-4 px-6 py-4 bg-black border-b border-white text-sm md:text-base"
                    >
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
