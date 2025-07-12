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
    <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 py-4 flex items-center justify-between backdrop-blur-sm text-white">
      <h1 className="text-2xl font-bold">Ultimate Mumbai</h1>

      <ul className="hidden md:flex gap-12 font-medium relative">
        <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>

        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-blue-300 transition cursor-pointer">
            Activities <FaAngleDown className="text-xs mt-[2px]" />
          </div>

          {/* Main dropdown */}
          <div className="absolute right-0 mt-2 p-4 rounded-lg shadow w-[220px] bg-white text-black 
                          opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30 space-y-2 text-sm">

            {/* Ultimate Parties with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded hover:text-blue-600 cursor-pointer list-none">
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
                  <div key={item} className="hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* City Tours with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded hover:text-blue-600 cursor-pointer list-none">
                City Tours <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Historical & Museum Tours',
                  'Private Custom Tours',
                  'Spiritual Tours',
                  'Trekking Adventures',
                ].map(item => (
                  <div key={item} className="hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* Workshops with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded hover:text-blue-600 cursor-pointer list-none">
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
                  <div key={item} className="hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* Corporate Events with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded hover:text-blue-600 cursor-pointer list-none">
                Corporate Events <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Entertainment line-ups',
                  'Team Building activities',
                  'Cocktails/Mocktails session',
                  'Team Events',
                ].map(item => (
                  <div key={item} className="hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

            {/* Unique Experiences with submenu below */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded hover:text-blue-600 cursor-pointer list-none">
                Unique Experiences <FaAngleDown className="text-xs" />
              </summary>

              <div className="mt-2 pl-4 space-y-1">
                {[
                  'Beer Bike - Mumbai Ride',
                  'Boat Party with Booze',
                ].map(item => (
                  <div key={item} className="hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </details>

          </div>
        </li>




        {/* More tab (you can also add click-based expansion here if needed) */}
        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-blue-300 transition cursor-pointer">
            More <FaAngleDown className="text-xs mt-[2px]" />
          </div>
          <div className="absolute right-0 mt-2 p-4 rounded-lg shadow w-43 bg-white text-black opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-30">
            <ul className="space-y-2">
              {[{ name: 'About Us', href: '#about' }, { name: 'Contact & FAQs', href: '#contact' }, { name: 'Blogs/Journal', href: '#contact' }, { name: 'Partner with Us', href: '#contact' }].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="block px-2 py-1 rounded hover:bg-blue-100 hover:text-blue-600 transition">
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


      {/* Mobile menu – only rendered when mobileMenuOpen === true */}
    {mobileMenuOpen && (
      <ul
        ref={menuRef}
        className="fixed top-0 left-0 h-screen w-72 bg-white text-black p-6 space-y-4 shadow-lg z-40 md:hidden overflow-y-auto"
      >
        {/* close icon inside the drawer */}
        <li className="flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)}>
            <HiX size={28} />
          </button>
        </li>

        {/* top‑level links */}
        <li>
          <a href="#" className="block font-medium py-2 hover:text-blue-600">Home</a>
        </li>

        {/* collapsible Activities section */}
        <details>
          <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-blue-600">
            Activities <FaAngleDown className="text-xs" />
          </summary>
          <ul className="mt-2 pl-4 space-y-1 text-sm">
            <details>
              <summary className="flex items-center justify-between py-1 cursor-pointer">
                Ultimate Parties <FaAngleRight className="text-[10px]" />
              </summary>
              <ul className="mt-1 pl-4 space-y-1">
                {[
                  'Pub Crawl',
                  'Karaoke Party',
                  'Private Resort Party',
                  'Private Techno Party',
                  'Private Queer Party',
                  'Silent Disco Party',
                  'Custom Private Parties',
                ].map(item => (
                  <li key={item} className="py-1 hover:text-blue-600">{item}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary className="flex items-center justify-between py-1 cursor-pointer">
                City Tours <FaAngleRight className="text-[10px]" />
              </summary>
              <ul className="mt-1 pl-4 space-y-1">
                {[
                  'Historical & Museum Tours',
                  'Private Custom Tours',
                  'Spiritual Tours',
                  'Trekking Adventures',
                ].map(item => (
                  <li key={item} className="py-1 hover:text-blue-600">{item}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary className="flex items-center justify-between py-1 cursor-pointer">
                Workshops <FaAngleRight className="text-[10px]" />
              </summary>
              <ul className="mt-1 pl-4 space-y-1">
                {[
                  'Pottery Workshop',
                  'Waffle Workshop',
                  'Cocktail Workshop',
                  'Yoga Workshop',
                  'Bollywood Dance Workshop'
                ].map(item => (
                  <li key={item} className="py-1 hover:text-blue-600">{item}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary className="flex items-center justify-between py-1 cursor-pointer">
                Corporate Events <FaAngleRight className="text-[10px]" />
              </summary>
              <ul className="mt-1 pl-4 space-y-1">
                {[
                  'Entertainment line-ups',
                  'Team Building activities',
                  'Cocktails/Mocktails session',
                  'Team Events',
                ].map(item => (
                  <li key={item} className="py-1 hover:text-blue-600">{item}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary className="flex items-center justify-between py-1 cursor-pointer">
                Unique Experiences <FaAngleRight className="text-[10px]" />
              </summary>
              <ul className="mt-1 pl-4 space-y-1">
                {[
                  'Beer Bike - Mumbai Ride',
                  'Boat Party with Booze',
                ].map(item => (
                  <li key={item} className="py-1 hover:text-blue-600">{item}</li>
                ))}
              </ul>
            </details>

            {/* repeat <details> blocks for City Tours, Workshops, etc. */}
          </ul>
        </details>

        {/* More section */}
        <details>
          <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-blue-600">
            More <FaAngleDown className="text-xs" />
          </summary>
          <ul className="mt-2 pl-4 space-y-1 text-sm">
            {[{ name: 'About Us', href: '#about' },
              { name: 'Contact & FAQs', href: '#contact' },
              { name: 'Blogs/Journal', href: '#' },
              { name: 'Partner with Us', href: '#' }].map(link => (
              <li key={link.name}>
                <a onClick={() => setMobileMenuOpen(false)}
                  href={link.href}
                  className="block py-1 hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </ul>
    )}

    </nav>
  );
}
