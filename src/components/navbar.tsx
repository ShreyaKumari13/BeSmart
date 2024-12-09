'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `
      ${isScrolled ? 'text-black' : 'text-white'}
      text-[20px]
      font-[300]
      leading-[23.48px]
      font-raleway
      text-left
      hover:font-[700] hover:${isScrolled ? 'text-black' : 'text-white'}
    `;
  };

  const getIconStyle = () => `
    ${isScrolled ? 'text-black' : 'text-white'}
    hover:${isScrolled ? 'text-gray-700' : 'text-blue-400'}
    transition-colors
    cursor-pointer
  `;

  const navbarStyle = `
    fixed w-full z-50
    ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
    transition-colors duration-300
  `;

  return (
    <nav className={navbarStyle}>
      <div className="container mx-auto px-4 lg:px-32">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-[100px] h-[80px]">
              <Image
                src="/images/image 1.png"
                alt="BeSmart Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex-1 ml-10">
            <ul className="flex items-center justify-end gap-10">
              <li>
                <Link href="/" className={getLinkStyle('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={getLinkStyle('/about')}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className={getLinkStyle('/how-it-works')}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className={getLinkStyle('/contact')}>
                  Contact Us
                </Link>
              </li>
              <li>
                {/* Search Icon */}
                <button
                  className={getIconStyle()}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
