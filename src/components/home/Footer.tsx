"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden  tracking-wide">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          className="w-full h-full object-cover scale-105 blur-sm brightness-75"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/footer.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Optional Overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 max-w-8xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left - Get In Touch */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal mb-8">
              GET IN <br /> TOUCH
            </h2>
            <p className="text-4xl mb-1 button-font">+923xxxxxxxxx</p>
            <p className="text-4xl mb-4 button-font">info@vroom.pk</p>
            <div className="flex items-center mt-24 button-font space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition">YouTube</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-xl font-normal mb-4 uppercase text-gray-300">Events</h3>
            <ul className="space-y-2 text-base button-font">
             <li><Link href="/events" className="hover:text-gray-200">Upcoming Events</Link></li>
             <li><Link href="/past-an-event" className="hover:text-gray-200">Past Events</Link></li>
<li><Link href="/host-an-event" className="hover:text-gray-200">Host an Event</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-xl font-normal mb-4 uppercase text-gray-300">Experiences</h3>
            <ul className="space-y-2 text-base button-font">
               <li><Link href="/time-attack" className="hover:text-gray-200">Time Attack</Link></li>
    <li><Link href="/go-karting" className="hover:text-gray-200">Go Karting</Link></li>
    <li><Link href="/drifting" className="hover:text-gray-200">Drifting</Link></li>
    <li><Link href="/corporate-packages" className="hover:text-gray-200">Corporate Packages</Link></li>
    <li><Link href="/test-facilitation" className="hover:text-gray-200">Test Facilitation</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-normal mb-4 uppercase text-gray-300">About</h3>
            <ul className="space-y-2 text-base button-font">
               <li><Link href="/about-track" className="hover:text-gray-200">About Vroom</Link></li>
          
            </ul>
          </div>
        </div>

        {/* Bottom Row (Location, Info, Others) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div /> {/* Empty left cell to align with Get In Touch */}

          {/* Location */}
          <div>
            <h3 className="text-xl font-normal mb-4 uppercase text-gray-300">Location</h3>
            <p className="text-base button-font leading-relaxed">
              SA Gardens phase 2, Lahore,<br />
              Pakistan 39020
            </p>
            <a href="#" className="text-lg  button-font hover:text-gray-200">Locate Us</a>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-normal mb-4 uppercase text-gray-300">Info</h3>
            <a href="/host-an-event" className="text-base button-font hover:text-gray-200">Host an Event</a>
          </div>

          {/* Others */}
          <div>
            <h3 className="text-xl font-normal mb-4 uppercase text-gray-300">Others</h3>
            <Link href="/media-and-community" className="text-base button-font hover:text-gray-200">
    Media and Community
  </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 border-t button-font border-white text-center text-[12px] py-4 text-white">
        © 2025 Vroom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
