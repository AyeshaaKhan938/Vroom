"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/components/common/ModalProvider";

export default function VroomEvents() {
  const events = [
    {
      id: 1,
      image: '/assets/images/Thumbnail.png',
      title: 'Upcoming Events',
      description:
        "You dream of becoming the Exost Car Champion Radio controlled? Participate in the 1st Grand Prix and celebrate the 10th anniversary of Exost. Take your remote control, turn on the motors, and do your best time to become the Exost Champion 2025!",
      button: 'Explore Now',
    },
    {
      id: 2,
      image: '/assets/images/Thumbnail1.png',
      title: 'Host an Event',
      description:
        'Discover the rush of upcoming events, relive the excitement of past events, or take the wheel by hosting your own. From track days to community gatherings, every moment at Vroom fuels passion, speed, and adrenaline.',
      button: 'About Us',
    },
    {
      id: 3,
      image: '/assets/images/Thumbnail2.png',
      title: 'Past Events',
      description:
        "You dream of becoming the Exost Car Champion Radio controlled? Participate in the 1st Grand Prix and celebrate the 10th anniversary of Exost. Take your remote control, turn on the motors, and do your best time to become the Exost Champion 2025!",
      button: 'Check out',
    },
  ];

  const router = useRouter();
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // Hero section is 80vh
      const scrollThreshold = heroHeight; // Show when past hero section
      
      // Show events header when scrolled past hero section
      // Hide when scrolling back up to hero section
      if (currentScrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section ref={sectionRef} className="w-full bg-[#F5F5F5] px-6 pb-12">
      {/* Sticky Header - Only visible when scrolled down, replaces main header */}
      <header 
        className={`fixed top-16 left-0 right-0 z-[60] bg-[#F5F5F5] text-black transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 py-3">
          <button className="p-2 cursor-pointer" onClick={() => openModal('menu')}>
            <img
              src="/assets/images/hamburger-black.svg"
              alt="Menu"
              className="w-24 h-24 md:w-24 md:h-24"
            />
          </button>
          <button className="text-base md:text-lg tracking-normal cursor-pointer" onClick={() => openModal('leaderboard')}>Leaderboard</button>
        </div>
      </header>

      {/* Section Heading */}
      <div className="max-w-7xl pt-24 mx-auto mb-6">
        <h2 className="text-3xl md:text-4xl ml-4 font-normal text-black button-font">
          Events
        </h2>
        <div className="w-full ml-4 h-0.5 bg-red-600 mt-2"></div>
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl pt-4  rounded-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative flex flex-col bg-white rounded-md overflow-hidden  before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[180px] before:h-[45px] before:bg-[#E8E7E7] before:rounded-tl-[8px]"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-red-600 text-xl font-semibold mb-3 button-font">
                {event.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed button-font mb-6">
                {event.description}
              </p>

              {/* Button inside the cut */}
              <div className="absolute bottom-1 right-8 z-10">
                <button
                  className="text-black text-lg font-medium cursor-pointer tracking-wide hover:tracking-widest transition-all"
                 onClick={() => {
  if (event.button === 'Explore Now') {
    router.push('/events');
  } else if (event.button === 'About Track') {
    router.push('/about-track');
  } else if (event.button === 'Check out') {
    router.push('/checkout-flow');
  }
}}
                >
                  {event.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
