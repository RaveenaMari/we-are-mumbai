'use client';

import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  // State for each submenu
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    parties: false,
    cityTours: false,
    workshops: false,
    corporate: false,
    unique: false
  });

  // Toggle submenu on click
  const toggleMenu = (key: string) => {
    setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
    <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-sm text-white">
      <h1 className="text-2xl font-bold">We Are Mumbai</h1>

      <ul className="hidden md:flex gap-12 font-medium relative">
        <li><a href="#" className="hover:text-rose-300 transition">Home</a></li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            Activities <FaAngleDown className="text-xs mt-[2px]" />
          </div>

          {/* Main dropdown */}
          <div className="absolute right-0 mt-2 p-4 rounded-lg shadow w-[220px] bg-white text-black 
                          opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30 space-y-2 text-sm">

            {/* Ultimate Parties with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-rose-100 px-2 py-1 rounded hover:text-rose-600 cursor-pointer list-none">
                Ultimate Parties <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Pub Crawl',
                  'Karaoke Party',
                  'Private Resort Party',
                  'Private Techno Party',
                  'Private Queer Party',
                  'Silent Disco Party',
                  'Custom Private Parties',
                ].map(item => (
                  <div key={item} className="hover:text-rose-600 hover:bg-rose-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* City Tours with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-rose-100 px-2 py-1 rounded hover:text-rose-600 cursor-pointer list-none">
                City Tours <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Historical & Museum Tours',
                  'Private Custom Tours',
                  'Spiritual Tours',
                  'Trekking Adventures',
                ].map(item => (
                  <div key={item} className="hover:text-rose-600 hover:bg-rose-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* Workshops with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-rose-100 px-2 py-1 rounded hover:text-rose-600 cursor-pointer list-none">
                Workshops <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Pottery Workshop',
                  'Waffle Workshop',
                  'Cocktail Workshop',
                  'Yoga Workshop',
                  'Bollywood Dance Workshop'
                ].map(item => (
                  <div key={item} className="hover:text-rose-600 hover:bg-rose-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* Corporate Events with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-rose-100 px-2 py-1 rounded hover:text-rose-600 cursor-pointer list-none">
                Corporate Events <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Entertainment line-ups',
                  'Team Building activities',
                  'Cocktails/Mocktails session',
                  'Team Events',
                ].map(item => (
                  <div key={item} className="hover:text-rose-600 hover:bg-rose-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* Unique Experiences with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-rose-100 px-2 py-1 rounded hover:text-rose-600 cursor-pointer list-none">
                Unique Experiences <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Beer Bike - Mumbai Ride',
                  'Boat Party with Booze',
                ].map(item => (
                  <div key={item} className="hover:text-rose-600 hover:bg-rose-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

          </div>
        </li>




        {/* More tab (you can also add click-based expansion here if needed) */}
        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-rose-300 transition cursor-pointer">
            More <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute right-0 mt-2 p-4 rounded-lg shadow w-35 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
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

      {/* Mobile menu icon */}
      <div className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </div>
    </nav>
  );
}
