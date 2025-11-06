'use client'
import Link from "next/link";

export default function About() {
  const handleScrollDown = () => {
    const section = document.getElementById('experiences-content')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      // fallback: scroll down a bit if section not found
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative mt-48 w-full  overflow-hidden">
     
     

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col">
        {/* Top bar */}
       

 
    <div className=" bg-[#F5F5F5]">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">About Track</h1>
      </div>

      {/* About the Track Section */}
      <div className="px-6 py-12 button-font md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About the Track</h2>
        <p className="text-gray-700 mb-8">
          Designed to ignite passion and performance, Vroom Racing Circuit features a professional-grade layout built to host enthusiast-high-speed racing, long-distance runs and budgets to compete with world-renowned race facilities.
        </p>

        {/* Track Aerial Image */}
        <div className="mb-12">
          <img 
            src="/assets/images/about1.png" 
            alt="Aerial view of racing track" 
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Track Highlights */}
        <h3 className="text-2xl font-bold mb-6">Track Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Highlight Card 1 */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/assets/images/about2.png" 
              alt="Track Length" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-bold mb-1">Track Length</h4>
              <p className="text-sm text-gray-600">Experience the thrill on our world-class circuit.</p>
            </div>
          </div>

          {/* Highlight Card 2 */}
          <div className="rounded-lg overflow-hidden">
         
              <div className="text-center text-white">
                 <img 
              src="/assets/images/about3.png" 
              alt="Track Length" 
              className="w-full h-48 object-cover"
            />
    
            </div>
            <div className="p-4 bg-white">
              <h4 className="font-bold mb-1">DRS Zone</h4>
              <p className="text-sm text-gray-600">Strategic overtaking zones for exciting races.</p>
            </div>
          </div>

          {/* Highlight Card 3 */}
             <div className="rounded-lg overflow-hidden">
         
              <div className="text-center text-white">
                 <img 
              src="/assets/images/about4.png" 
              alt="Track Length" 
              className="w-full h-48 object-cover"
            />
    
            </div>
            <div className="p-4 bg-white">
              <h4 className="font-bold mb-1">Safety First</h4>
              <p className="text-sm text-gray-600">Top-tier safety barriers and emergency systems.</p>
            </div>
          </div>

          {/* Highlight Card 4 */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/assets/images/about5.png" 
              alt="Track Lighting" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-bold mb-1">Lighting</h4>
              <p className="text-sm text-gray-600">State-of-the-art floodlights for evening events.</p>
            </div>
          </div>
        </div>

        {/* World-Class Facilities */}
        <h3 className="text-2xl font-bold mb-4">World-Class Facilities</h3>
        <p className="text-gray-700 mb-6">
          From pit garages and VIP host suites, to spectator areas and media rooms, Vroom offers the complete motorsport road experience. Every space is designed to be elegant speed, fusing luxury and exceptional performance alike.
        </p>

        {/* Facilities Icons */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
  {/* Pit Area */}
  <div className="flex items-center justify-center p-2 bg-white border border-gray-200 text-center">
    <div className="w-8 h-8 mr-3">
      <img src="/assets/images/pit1.svg" alt="Pit Area" className="w-full h-full" />
    </div>
    <p className="text-sm font-medium">Pit Area</p>
  </div>

  {/* Control Tower */}
  <div className="flex items-center justify-center p-2 bg-white border border-gray-200 text-center">
    <div className="w-8 h-8 mr-3">
      <img src="/assets/images/pit2.svg" alt="Control Tower" className="w-full h-full" />
    </div>
    <p className="text-sm font-medium">Control Tower</p>
  </div>

  {/* Lounge & Café */}
  <div className="flex items-center justify-center p-2 bg-white border border-gray-200 text-center">
    <div className="w-8 h-8 mr-3">
      <img src="/assets/images/pit3.svg" alt="Lounge & Café" className="w-full h-full" />
    </div>
    <p className="text-sm font-medium">Lounge & Café</p>
  </div>

  {/* Parking */}
  <div className="flex items-center justify-center p-2 bg-white border border-gray-200 text-center">
    <div className="w-8 h-8 mr-3">
      <img src="/assets/images/pit1.svg" alt="Parking" className="w-full h-full" />
    </div>
    <p className="text-sm font-medium">Parking</p>
  </div>

  {/* Viewing Deck */}
  <div className="flex items-center justify-center p-2 bg-white border border-gray-200 text-center">
    <div className="w-8 h-8 mr-3">
      <img src="/assets/images/pit4.svg" alt="Viewing Deck" className="w-full h-full" />
    </div>
    <p className="text-sm font-medium">Viewing Deck</p>
  </div>
</div>


        {/* More Than Just a Track */}
        <h3 className="text-2xl font-bold mb-4">More Than Just a Track</h3>
        <p className="text-gray-700 mb-6">
          It was built using the circuit – it's about everything. From the adrenaline challenge to memorable events and guard duty, our racing facilities enthusiasts take feel for every event.
        </p>

      <Link href="/register-as-racer">
  <button className="bg-red-600 cursor-pointer  text-white px-6 py-3 rounded font-medium hover:bg-red-700 transition-colors">
    Book an Experience
  </button>
</Link>
      </div>

      {/* Visit the Circuit Section */}
      <div className="bg-white py-16 button-font text-center">
        <h2 className="text-3xl font-bold mb-4">Visit the Circuit</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto px-6">
          See us at the Vroom Racing Circuit and experience the thrill of motorsport in Machala.
        </p>
              <Link href="/events">
        <button className="bg-red-600 cursor-pointer text-white px-8 py-3 rounded font-medium hover:bg-red-700 transition-colors">
          Upcoming Events
        </button>
        </Link>
      </div>
    </div>
  
      </div>
    </section>
  )
}
