'use client'
import React, { useState } from 'react';

export default function PastEventsResults() {
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedEventType, setSelectedEventType] = useState('All Event Types');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const months = [
    { name: 'Jan', active: false },
    { name: 'Feb', active: false },
    { name: 'Mar', active: true },
    { name: 'Apr', active: false },
    { name: 'May', active: true },
    { name: 'Jun', active: true },
    { name: 'Jul', active: false },
    { name: 'Aug', active: true },
    { name: 'Sep', active: true },
    { name: 'Oct', active: false },
    { name: 'Nov', active: true },
    { name: 'Dec', active: false },
  ];

  return (
    <div className="min-h-screen mt-24 button-font bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white px-6 py-16 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Past Events & Results
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl">
          Relive the excitement and adrenaline of our completed racing events. Explore race results, participant highlights, and memorable moments from Vroom Racing Circuit's history.
        </p>
      </div>

      {/* Filters Section */}
      <div className="px-6 py-8 md:px-12 lg:px-24 bg-[#F5F5F5]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-gray-700 font-medium">Filter by:</span>
          
          {/* Year Dropdown */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option>All Years</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>

          {/* Event Type Dropdown */}
          <select
            value={selectedEventType}
            onChange={(e) => setSelectedEventType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option>All Event Types</option>
            <option>Championship</option>
            <option>Sprint Race</option>
            <option>Endurance</option>
          </select>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option>All Categories</option>
            <option>Professional</option>
            <option>Amateur</option>
            <option>Junior</option>
          </select>

          {/* Apply Filters Button */}
          <button className="px-6 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Event Timeline Section */}
      <div className="px-6 py-12 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold mb-8">Event Timeline 2024</h2>
        
        {/* Month Buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {months.map((month) => (
            <button
              key={month.name}
              className={`py-3 px-4 rounded font-medium transition-colors ${
                month.active
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : ' bg-[#F5F5F5] rounded-xl text-gray-700 hover:border-gray-400'
              }`}
            >
              {month.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Past Events Section */}
      <div className="px-6 py-12 md:px-12 lg:px-24 bg-[#F5F5F5]">
        <h2 className="text-3xl font-bold mb-8">Featured Past Events</h2>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/assets/images/past.jpg" 
                alt="Championship Grand Prix" 
                className="w-full h-full"
              />
              <div className=" top-42 left-6 mt-2 flex gap-2">
                <span className="bg-red-600 text-white ml-4 text-xs font-bold px-3 py-1">Racing</span>
                <span className="text-xs text-gray-700 bg-white px-2 py-1 rounded">November 15, 2024</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mt-4 mb-3">Championship Grand Prix</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>156 Participants</span>
                <span>Professional Category</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm">
    <img 
                src="/assets/images/trophy.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-5 h-5"
              />
                <span className="font-medium">Winner: Marcus Rodriguez</span>
              </div>
              
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/assets/images/past1.jpg" 
                alt="Drift Masters Championship" 
                className="w-full h-full object-cover"
              />
           <div className=" top-42 left-6 mt-2 flex gap-2">
                <span className="bg-[#FF8800] text-white ml-4 text-xs font-bold px-3 py-1">Drift</span>
                <span className="text-xs text-gray-700 bg-white px-2 py-1 rounded">September 22, 2024
                    
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mt-4 mb-3">Drift Masters Championship</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>89 Participants</span>
                <span>Professional Category</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm">
    <img 
                src="/assets/images/trophy.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-5 h-5"
              />
                <span className="font-medium">Winner: Akira Tanaka</span>
              </div>
             
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/assets/images/past2.jpg" 
                alt="Tech Leaders Racing Challenge" 
                className="w-full h-full object-cover"
              />
              <div className=" top-42 left-6 mt-2 flex gap-2">
                <span className="bg-[#00C851] text-white ml-4 text-xs font-bold px-3 py-1">Corporate</span>
                <span className="text-xs text-gray-700 bg-white px-2 py-1 rounded">August 18, 2024
                    
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mt-4 mb-3">Tech Leaders Racing Challenge</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>64 Participants</span>
                <span>Corporate Category</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm">
          <img 
                src="/assets/images/trophy.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-5 h-5"
              />
                <span className="font-medium">Winner: TechCorp Team Alpha</span>
              </div>
             
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/assets/images/past4.png" 
                alt="Summer Amateur Cup" 
                className="w-full h-full object-cover"
              />
               <div className=" top-42 left-6 mt-2 flex gap-2">
                <span className="bg-red-600 text-white ml-4 text-xs font-bold px-3 py-1">Racing</span>
                <span className="text-xs text-gray-700 bg-white px-2 py-1 rounded">June 10, 2024
                    
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mt-4 mb-3">Summer Amateur Cup</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>132 Participants</span>
                <span>Amateur Category</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm">
            <img 
                src="/assets/images/trophy.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-5 h-5"
              />
                <span className="font-medium">Winner: Sarah Chen</span>
              </div>
              
            </div>
          </div>

          {/* Event Card 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/assets/images/past5.jpg" 
                alt="Midnight Thunder Race" 
                className="w-full h-full object-cover"
              />
             <div className=" top-42 left-6 mt-2 flex gap-2">
                <span className="bg-red-600 text-white ml-4 text-xs font-bold px-3 py-1">Racing</span>
                <span className="text-xs text-gray-700 bg-white px-2 py-1 rounded">May 20, 2024
                    
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mt-4 mb-3">Midnight Thunder Race</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>98 Participants</span>
                <span>Professional Category</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm">
       <img 
                src="/assets/images/trophy.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-5 h-5"
              />
                <span className="font-medium">Winner: Diego Martinez</span>
              </div>
             
            </div>
          </div>

          {/* Event Card 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/assets/images/past6.jpg" 
                alt="6-Hour Endurance Challenge" 
                className="w-full h-full object-cover"
              />
               <div className=" top-42 left-6 mt-2 flex gap-2">
                <span className="bg-red-600 text-white ml-4 text-xs font-bold px-3 py-1">Racing</span>
                <span className="text-xs text-gray-700 bg-white px-2 py-1 rounded">March 15, 2024
                    
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mt-4 mb-3">6-Hour Endurance Challenge</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>72 Participants</span>
                <span>Professional Category</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm">
                <img 
                src="/assets/images/trophy.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-5 h-5"
              />
                <span className="font-medium">Winner: Team Velocity</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
       {/* Event Highlights & Statistics Section */}
      <div className="px-6 py-12 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold mb-8">Event Highlights & Statistics</h2>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stat Card 1 */}
          <div className="bg-black text-center py-8 px-6 ">
            <div className="text-5xl font-bold text-red-600 mb-2">127</div>
            <div className="text-white text-sm">Total Events<br/>Completed</div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-black text-center py-8 px-6 ">
            <div className="text-5xl font-bold text-red-600 mb-2">2,847</div>
            <div className="text-white text-sm">Total<br/>Participants</div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-black text-center py-8 px-6">
            <div className="text-5xl font-bold text-red-600 mb-2">1:42.8</div>
            <div className="text-white text-sm">Circuit<br/>Record Time</div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-black text-center py-8 px-6">
            <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-white text-sm">Participant<br/>Satisfaction</div>
          </div>
        </div>

        {/* Memorable Moments Section */}
        <h3 className="text-2xl font-bold mb-6">Memorable Moments</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Moment Card 1 */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <div className="flex items-start gap-4">
            <img 
                src="/assets/images/ps1.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-10 h-10"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Circuit Record Broken</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Marcus Rodriguez set a new track record of 1:42.8 during the Championship Grand Prix, breaking the previous record by 0.3 seconds.
                </p>
                <p className="text-red-600 text-sm font-medium">November 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Moment Card 2 */}
          <div className="bg-[#F5F5F5]  p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <img 
                src="/assets/images/ps2.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-10 h-10"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Largest Corporate Event</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Tech Leaders Racing Challenge hosted the largest corporate racing event with 64 participants from 12 different companies competing.
                </p>
                <p className="text-red-600 text-sm font-medium">August 18, 2024</p>
              </div>
            </div>
          </div>

          {/* Moment Card 3 */}
          <div className="bg-[#F5F5F5]  p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <img 
                src="/assets/images/ps3.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-10 h-10"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Perfect Weather Championship</h4>
                <p className="text-gray-700 text-sm mb-3">
                  The Summer Amateur Cup was held under perfect racing conditions with ideal temperature and clear skies throughout the entire event.
                </p>
                <p className="text-red-600 text-sm font-medium">June 10, 2024</p>
              </div>
            </div>
          </div>

          {/* Moment Card 4 */}
          <div className="bg-[#F5F5F5]  p-6 rounded-lg">
            <div className="flex items-start gap-4">
               <img 
                src="/assets/images/ps4.svg" 
                alt="6-Hour Endurance Challenge" 
                className="w-10 h-10"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">First Night Racing Event</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Midnight Thunder Race marked our first-ever night racing event, featuring spectacular illuminated track using under floodlights.
                </p>
                <p className="text-red-600 text-sm font-medium">May 20, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Record Achievements Section */}
        <h3 className="text-2xl font-bold mb-6">Record Achievements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Achievement Card 1 */}
          <div className="bg-[#F5F5F5]  text-center py-8 px-6 rounded-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">1:42.8</div>
            <div className="font-bold text-lg mb-1">Fastest Lap Time</div>
            <div className="text-gray-600 text-sm">Marcus Rodriguez</div>
          </div>

          {/* Achievement Card 2 */}
          <div className="bg-[#F5F5F5]  text-center py-8 px-6 rounded-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">156</div>
            <div className="font-bold text-lg mb-1">Most Participants</div>
            <div className="text-gray-600 text-sm">Championship Grand Prix</div>
          </div>

          {/* Achievement Card 3 */}
          <div className="bg-[#F5F5F5]  text-center py-8 px-6 rounded-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">6 Hours</div>
            <div className="font-bold text-lg mb-1">Longest Race Duration</div>
            <div className="text-gray-600 text-sm">Endurance Challenge</div>
          </div>
        </div>
      </div>
    </div>

  );
}