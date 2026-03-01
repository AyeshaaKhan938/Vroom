"use client";

import React from "react";

export default function VroomMediaCommunity() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        src="/assets/videos/media.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay for darker readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-normal mb-4 text-white tracking-wide">
          Media and Community
        </h2>
        <p className="text-lg md:text-lg leading-relaxed button-font mb-6 text-gray-200">
          Join a community built on passion and performance. From sharing your
          best <br/> moments on the track to connecting with fellow enthusiasts through
          events, media, <br/> and stories, Vroom is more than racing – it’s where
          experiences <br/> turn into lifelong connections.
        </p>
        <a
          href="/media-and-community"
          className="text-[#ff3b3b] underline text-sm md:text-base font-normal tracking-wider hover:underline"
        >
          Checkout Media & Community
        </a>
      </div>
    </section>
  );
}
