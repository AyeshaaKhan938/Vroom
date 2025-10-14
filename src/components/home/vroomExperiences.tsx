'use client'

export default function VroomExperiences() {
  const experiences = [
    'Time Attack',
    'Go Karting',
    'Drifting',
    'Corporate Packages',
    'Test Facilitation'
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/vroom-hero.mp4" type="video/mp4" />
      </video>

  
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

 
      <div className="relative z-10 h-full flex flex-col md:flex-row items-start justify-between px-6 md:px-12 lg:px-20 py-16 md:py-24">
   
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-[#E8E7E7] text-4xl md:text-5xl lg:text-6xl font-normal mb-4 button-font">
            Experiences
          </h2>
          <div className="w-64 h-0.5 bg-red-600 mb-8"></div>
          
          <p className="text-[#E8E7E7] text-base md:text-lg leading-relaxed button-font max-w-lg">
            Discover the thrill of driving like never before. From the precision of Time Attack to the rush of Go Karting, the excitement of Drifting, exclusive Corporate Packages, and full access to our state-of-the-art Test Facility, Vroom brings experiences that fuel passion and performance for everyone.
          </p>
        </div>

   
        <div className="w-full md:w-auto flex flex-col items-start md:items-end justify-center space-y-3 md:space-y-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="text-[#E8E7E7] text-2xl md:text-3xl lg:text-4xl font-normal button-font hover:text-red-500 transition-colors cursor-pointer"
            >
              {experience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}