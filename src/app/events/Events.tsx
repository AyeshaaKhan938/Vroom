'use client'
import { useModal } from '@/components/common/ModalProvider'

const sampleEvents = [
  {
    id: 1,
    title: 'Vintage Car Rally',
    image: '/assets/images/event1.png',
    description:
      'A celebration of classic racing cars. Enjoy a day of vintage car displays and races.',
    cta: 'Buy Tickets',
  },
  {
    id: 2,
    title: 'Grand Prix of Speedway',
    image: '/assets/images/event2.png',
    description:
      'Experience the thrill of the Grand Prix at Speedway Circuit. Witness top racers compete for the championship title.',
    ctaPrimary: 'Register as Racer',
    ctaSecondary: 'Buy Tickets',
  },
  {
    id: 3,
    title: 'Night Race Challenge',
    image: '/assets/images/event3.png',
    description:
      'Feel the adrenaline rush of night racing. This event features a unique track layout under the lights.',
    cta: 'Buy Tickets',
  },
]

export default function EventsPage() {
  const { openModal } = useModal()
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF]">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button className="p-2" aria-label="Menu" onClick={() => openModal('menu')}>
          <img src="/assets/images/hamburger-black.svg" alt="Menu" className="w-30 h-30 inset" />
        </button>
        <div className="flex-1 flex justify-center">
          <img src="/assets/images/Logo.png" alt="Vroom Logo" className="h-8" />
        </div>
        <button className="text-black text-xl md:text-xl tracking-normal" onClick={() => openModal('leaderboard')}>Leaderboard</button>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className=" text-2xl md:text-3xl text-black text-center mb-6">Upcoming Events</h2>

    <div className="flex justify-center pb-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
    {sampleEvents.map((ev) => (
      <div
        key={ev.id}
        className="group bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.15)] hover:-translate-y-1 h-[480px] w-[95%] mx-auto flex flex-col"
      >
        <div className="h-[220px] overflow-hidden">
          <img
            src={ev.image}
            alt={ev.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-black button-font text-lg font-semibold mb-2">{ev.title}</h3>
          <p className="text-gray-700 text-sm button-font leading-relaxed mb-4 flex-grow">
            {ev.description}
          </p>

      <div className="flex flex-col items-start gap-3 mt-auto">
  {ev.ctaPrimary && (
    <button className="px-3 py-2 button-font rounded-sm bg-[#E9574C] text-white text-xs w-full md:w-auto transition-colors duration-300 group-hover:bg-red-600">
      {ev.ctaPrimary}
    </button>
  )}
  {ev.ctaSecondary && (
    <button className="px-3 py-2 button-font rounded-sm bg-[#E9574C] text-white text-xs w-full md:w-auto transition-colors duration-300 group-hover:bg-red-600">
      {ev.ctaSecondary}
    </button>
  )}
  {ev.cta && (
    <button className="px-3 py-2 button-font rounded-sm bg-[#E9574C] text-white text-xs w-full md:w-auto transition-colors duration-300 group-hover:bg-red-600">
      {ev.cta}
    </button>
  )}
</div>


        </div>
      </div>
    ))}
  </div>
</div>

      </main>
    </div>
  )
}


