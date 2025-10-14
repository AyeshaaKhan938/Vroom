'use client'
import { useEffect, useState } from 'react';

export default function VroomHero() {
  const words = ['Drifting', 'Time Attack', 'Go Karting', 'And many more'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('up'); // 'up' for bottom-to-top, 'down' for top-to-bottom
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Agar last word par hain aur up direction mein ja rahe hain
      if (currentIndex === words.length - 1 && direction === 'up') {
        // Reverse animation start karo - sab words ko rapidly dikhaao
        let reverseIndex = words.length - 1;
        const reverseInterval = setInterval(() => {
          if (reverseIndex > 0) {
            setIsAnimating(true);
            setDirection('down');
            setNextIndex(reverseIndex - 1);
            
            setTimeout(() => {
              reverseIndex--;
              setCurrentIndex(reverseIndex);
              setIsAnimating(false);
            }, 500);
          } else {
            clearInterval(reverseInterval);
            setDirection('up'); // Direction wapis up kar do
          }
        }, 1000); // Har 1 second mein ek word
      } else if (direction === 'up') {
        // Normal forward animation
        setIsAnimating(true);
        const next = currentIndex + 1;
        setNextIndex(next);
        
        setTimeout(() => {
          setCurrentIndex(next);
          setIsAnimating(false);
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, direction]);

  return (
    <div className="relative w-full  overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full  object-cover brightness-50 transition-opacity duration-300 ${menuOpen ? 'opacity-30' : 'opacity-100'}`}
      >
        <source src="/assets/videos/vroom-hero.mp4" type="video/mp4" />
      </video>


      <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-60' : 'opacity-50'}`}></div>


      <div className="relative z-10 flex flex-col h-full">

        <header className="flex items-center justify-between px-6 py-4">
          {/* Hamburger Button */}
          <button className="p-2" onClick={() => setMenuOpen(true)}>
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
              className="h-12"
            />
          </div>

          {/* Leaderboard */}
          <div className="text-[#E8E7E7] text-lg md:text-xl font-medium tracking-normal">
            Leaderboard
          </div>
        </header>

     
        <div className="flex-1 flex flex-col mt-20 items-center justify-center px-6 text-center">
          <h1 className="text-[#E8E7E7] mb-2">
            <span className="block text-4xl md:text-5xl lg:text-7xl font-normal tracking-normal mb-1">
              Pakistan's Premium
            </span>
            <span className="block text-4xl md:text-5xl lg:text-7xl font-normal tracking-normal">
              Racing Circuit
            </span>
          </h1>


          <div className="text-[#E8E7E7] text-3xl md:text-4xl w-full font-light tracking-normal mt-12 h-12 flex items-center justify-center relative">
            <style>{`
              @keyframes slideUp {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-100%); opacity: 0; }
              }
              @keyframes slideIn {
                0% { transform: translateY(100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
              }
              @keyframes slideDown {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(100%); opacity: 0; }
              }
              @keyframes slideInFromTop {
                0% { transform: translateY(-100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
              }
              .slide-up { 
                animation: slideUp 0.5s ease-in-out forwards;
              }
              .slide-in { 
                animation: slideIn 0.5s ease-in-out forwards;
              }
              .slide-down { 
                animation: slideDown 0.5s ease-in-out forwards;
              }
              .slide-in-top { 
                animation: slideInFromTop 0.5s ease-in-out forwards;
              }
              .static-word {
                position: absolute;
              }
            `}</style>
            
            {/* Current word that slides up or down */}
            <p
              key={`current-${currentIndex}`}
              className={`absolute ${isAnimating ? (direction === 'up' ? 'slide-up' : 'slide-down') : 'static-word'}`}
            >
              {words[currentIndex]}
            </p>
            
            {/* Next word that slides in from bottom or top */}
            {isAnimating && (
              <p
                key={`next-${nextIndex}`}
                className={`absolute ${direction === 'up' ? 'slide-in' : 'slide-in-top'}`}
              >
                {words[nextIndex]}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-8 mt-24 flex flex-col items-center gap-4">
          <button 
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className="flex items-center text-[#E8E7E7] text-base tracking-wider button-font cursor-pointer"
          >
            Discover
            <img
              src="/assets/images/Down.svg"
              alt="Down arrow"
              className="w-3 h-3 ml-1"
            />
          </button>
        </div>
      </div>

      {/* Fullscreen slide-in menu */}
      <div
        className={`fixed inset-0 z-20 bg-black/90 backdrop-blur-sm transform transition-transform duration-500 ease-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* keep background dimmed */}
        </div>
        <div className="relative h-full w-full text-white px-8 py-8 flex flex-col">
          <button className="self-start mb-8" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <span className="text-3xl">×</span>
          </button>
          <nav className="flex-1 flex flex-col gap-6 text-3xl md:text-5xl font-light">
            <a href="#events" className="hover:tracking-widest transition-all">Event and Tickets</a>
            <a href="#experience" className="hover:tracking-widest transition-all">Experience</a>
            <div className="mt-6 flex flex-col gap-3 text-base md:text-xl font-normal">
              <a href="#about">About Track</a>
              <a href="#media">Media and Community</a>
              <a href="#visit">Visit Us</a>
            </div>
            <a href="#contact" className="mt-auto text-4xl md:text-6xl">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  );
}