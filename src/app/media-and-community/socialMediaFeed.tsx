'use client';
import Image from 'next/image';
import Link from "next/link";


export default function SocialMediaFeed() {
  const posts = [
    '/assets/images/mcd1.png',
    '/assets/images/mcd2.png',
    '/assets/images/mcd3.png',
    '/assets/images/mcd4.png',
    '/assets/images/mcd5.png',
    '/assets/images/mcd6.png',
  ];

  return (
    <section className="bg-[#F5F5F5] button-font py-16">
      {/* --- Social Media Feed --- */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Social Media Feed</h2>
        <p className="text-gray-600 mb-6">
          Follow us on social media for live updates, behind-the-scenes content, and community highlights.
          Join the conversation and share your Vroom experiences!
        </p>

        {/* Instagram label */}
        <div className="flex items-center gap-2 mb-2">
          <div className=" text-white text-sm rounded p-1 flex items-center justify-center">
            <Image src="/assets/images/insta2.svg" alt="Instagram" width={20} height={20} />
          </div>
         
        </div>
 <p className="text-sm font-medium text-gray-900">Instagram</p>
        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Instagram grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {posts.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={src}
                alt={`Instagram Post ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* --- Partnerships Section --- */}
        <div className="bg-[#2B2B2B] text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Partnerships & Sponsorships</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Explore partnership and sponsorship opportunities with Vroom Racing Circuit. 
            Align your brand with Pakistan’s premier motorsport venue and reach a passionate audience.
          </p>
          <Link href="/host-an-event">
          <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg">
            Contact for Partnership Inquiries
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
