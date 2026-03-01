"use client";

import Image from "next/image";
import Link from "next/link";

export default function VroomAboutTrack() {
  return (
    <section className="bg-white text-black py-10 px-6 md:px-16">
      {/* Top Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold button-font tracking-wide text-gray-800 mb-1">
          About Track
        </h2>
        <div className="h-[2px] w-full bg-red-500"></div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h3 className="text-[#e02828] text-2xl md:text-3xl font-normal mb-4 tracking-tight">
            Vroom Racing Circuit
          </h3>
          <p className="text-lg leading-relaxed  text-[#000000] mb-6 button-font">
            Welcome to the most exhilarating racing experience in the region.
            Our  <br/> state-of-the-art racing track combines cutting-edge technology
            with <br/> world-class  safety standards   to deliver pure adrenaline. From
            professional <br/> racers to weekend  warriors, our premium facilities and 
            meticulously <br/> designed circuit  offer an unmatched racing experience
            that will leave you <br/> craving for more.
          </p>
         <Link 
  href="/events"
  className="text-black cursor-pointer font-normal text-2xl tracking-tight hover:text-red-600 transition"
>
Upcoming Events
</Link>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-md overflow-hidden shadow-md">
            <Image
              src="/assets/images/about.png"
              alt="Vroom Racing Circuit"
              width={600}
              height={350}
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Logos Row with Scrolling Animation */}
      <div className="relative mt-10 overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
        
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center gap-10 px-5 shrink-0">
            <Image
              src="/assets/images/honda.png"
              alt="Honda"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/rifty-series.png"
              alt="Rifty Series"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/redline.png"
              alt="Redline"
              width={110}
              height={40}
            />
            <Image
              src="/assets/images/sa-gardens.png"
              alt="SA Gardens"
              width={100}
              height={40}
            />
            <Image
              src="/assets/images/Sagroup.png"
              alt="SA Group"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/tba.png"
              alt="ABB Racing"
              width={80}
              height={40}
            />
          </div>
          
          {/* Duplicate set of logos for seamless loop */}
          <div className="flex items-center gap-10 px-5 shrink-0">
            <Image
              src="/assets/images/honda.png"
              alt="Honda"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/rifty-series.png"
              alt="Rifty Series"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/redline.png"
              alt="Redline"
              width={110}
              height={40}
            />
            <Image
              src="/assets/images/sa-gardens.png"
              alt="SA Gardens"
              width={100}
              height={40}
            />
            <Image
              src="/assets/images/Sagroup.png"
              alt="SA Group"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/tba.png"
              alt="ABB Racing"
              width={80}
              height={40}
            />
            <Image
              src="/assets/images/honda.png"
              alt="Honda"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/rifty-series.png"
              alt="Rifty Series"
              width={90}
              height={40}
            />
            <Image
              src="/assets/images/redline.png"
              alt="Redline"
              width={110}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
}