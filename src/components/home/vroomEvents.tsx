'use client'

export default function VroomEvents() {
  const events = [
    {
      id: 1,
      image: '/assets/images/Thumbnail.png',
      title: 'Upcoming Events',
      description: "You dream of becoming the Esports Champion Raito controller? Participate in the 1st Grand Prix and celebrates the 10th anniversary of Esost. Take your remote control, turn on the motors, and do the best time to try to become the Esost Champion 2025!"
    },
    {
      id: 2,
      image: '/assets/images/Thumbnail1.png',
      title: 'Host an Event',
      description: "Discover the rush of upcoming events, relive the excitement of past events, or take the wheel by hosting your own. From track days to exhilarating gatherings, every moment at Vroom fuels passion, speed, and adrenaline."
    },
    {
      id: 3,
      image: '/assets/images/Thumbnail2.png',
      title: 'Past Events',
      description: "You dream of becoming the Esports Champion Raito controller? Participate in the 1st Grand Prix and celebrates the 10th anniversary of Esost. Take your remote control, turn on the motors, and do the best time to try to become the Esost Champion 2025!"
    }
  ];

  return (
    <section className="w-full bg-[#E8E7E7] py-12 px-6">

      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-normal text-black button-font">Events</h2>
        <div className="w-full h-0.5 bg-red-600 mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
   
            <div className="w-full h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-red-600 text-xl font-semibold mb-3 button-font">
                {event.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed button-font">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-white text-black py-4 px-6 rounded text-lg font-normal hover:bg-gray-50 transition-colors">
          Explore Now
        </button>
        <button className="bg-white text-black py-4 px-6 rounded text-lg font-normal hover:bg-gray-50 transition-colors">
          Contact Us
        </button>
        <button className="bg-white text-black py-4 px-6 rounded text-lg font-normal hover:bg-gray-50 transition-colors">
          Check out
        </button>
      </div>
    </section>
  );
}