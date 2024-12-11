'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      text-[18px]
      font-[${isActive ? '700' : '300'}]
      leading-[23px]
      font-raleway
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
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-[80px] h-[60px] sm:w-[100px] sm:h-[80px]">
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
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <ul className="flex items-center gap-10">
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

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md bg-gray-800/50 backdrop-blur-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden
            ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
            overflow-hidden transition-all duration-300 ease-in-out
            ${isScrolled ? 'bg-white' : 'bg-black/90'}
            backdrop-blur-md
          `}
        >
          <ul className="flex flex-col items-center gap-6 py-4">
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
    </nav>
  );
}

