'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaAngleDown } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);


  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 py-4 flex items-center justify-between bg-purple-900/40 backdrop-blur-sm text-white">
      <h1 className="text-2xl font-bold">We Are Mumbai</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 font-medium relative">
        <li><a href="#" className="hover:text-rose-300 transition">Home</a></li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            Ultimate Parties <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute left-0 mt-2 p-4 rounded-lg shadow w-64 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2">
              {[
                'Pub Crawl',
                'Karaoke Party',
                'Private Resort Party',
                'Private Techno Party',
                'Private Queer Party',
                'Silent Disco Party',
                'Custom Private Parties',
              ].map(item => (
                <li
                  key={item}
                  className="px-2 py-1 rounded hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            City Tours <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute left-0 mt-2 p-4 rounded-lg shadow w-72 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2 text-sm">
              {[
                'Historical & Museum Tours',
                'Private Custom Tours',
                'Spiritual Tours',
                'Trekking Adventures'
              ].map(item => (
                <li
                  key={item}
                  className="px-2 py-1 rounded hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            Workshops <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute left-0 mt-2 p-4 rounded-lg shadow w-72 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2 text-sm">
              {[
                'Pottery Workshop',
                'Stroopwafel & Waffle Workshop',
                'Cocktail Workshop',
                'Yoga Workshop',
                'Bollywood Dance Workshop'
              ].map(item => (
                <li
                  key={item}
                  className="px-2 py-1 rounded hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            Corporate Events <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute left-0 mt-2 p-4 rounded-lg shadow w-72 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2 text-sm">
              {[
                'Entertainment line-ups',
                'Team-building activities',
                'Cocktail/mocktail sessions',
                'Full planning for team events'
              ].map(item => (
                <li
                  key={item}
                  className="px-2 py-1 rounded hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            Unique Experiences <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute left-0 mt-2 p-4 rounded-lg shadow w-72 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2 text-sm">
              {[
                'Beer Bike – Mumbai Ride',
                'Boat Party with Booze'
              ].map(item => (
                <li
                  key={item}
                  className="px-2 py-1 rounded hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            More <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute left-0 mt-2 p-4 rounded-lg shadow w-48 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2">
              {[{ name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }, { name: 'FAQs', href: '#contact' }].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="block px-2 py-1 rounded hover:bg-rose-100 hover:text-rose-600 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white text-black p-6 space-y-4 shadow-md md:hidden"
        >
          {["Home"].map(link => (
            <li key={link}>
              <a href="#" className="block hover:text-rose-600 transition">{link}</a>
            </li>
          ))}

          <div>
            <p className="font-semibold mb-2">Ultimate Parties</p>
            <ul className="space-y-1">
              {['Pub Crawl', 'Karaoke Party', 'Private Resort Party', 'Private Techno Party', 'Private Queer Party', 'Silent Disco Party', 'Custom Private Parties'].map(item => (
                <li key={item} className="hover:text-rose-600 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">City Tours</p>
            <ul className="space-y-1">
              {['Historical & Museum Tours', 'Private Custom Tours', 'Spiritual Tours', 'Trekking Adventures'].map(item => (
                <li key={item} className="hover:text-rose-600 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Workshops</p>
            <ul className="space-y-1">
              {['Pottery Workshop', 'Stroopwafel & Waffle Workshop', 'Cocktail Workshop', 'Yoga Workshop', 'Bollywood Dance Workshop'].map(item => (
                <li key={item} className="hover:text-rose-600 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Corporate Events</p>
            <ul className="space-y-1">
              {['Entertainment line-ups', 'Team-building activities', 'Cocktail/mocktail sessions', 'Full planning for team events'].map(item => (
                <li key={item} className="hover:text-rose-600 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Unique Experiences</p>
            <ul className="space-y-1">
              {['Beer Bike – Mumbai Ride', 'Boat Party with Booze'].map(item => (
                <li key={item} className="hover:text-rose-600 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">More</p>
            <ul className="space-y-1">
              {[{ name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }, { name: 'FAQs', href: '#contact' }].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="block hover:text-rose-600 transition">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      )}
    </nav>
  );
}

