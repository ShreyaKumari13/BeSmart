// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Search, Menu, X } from 'lucide-react';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const getLinkStyle = (path: string) => {
//     const isActive = pathname === path;
//     return `
//       ${isScrolled ? 'text-black' : 'text-white'}
//       text-[18px]
//       font-[${isActive ? '700' : '300'}]
//       leading-[23px]
//       font-raleway
//       hover:font-[700] hover:${isScrolled ? 'text-black' : 'text-white'}
//     `;
//   };

//   const getIconStyle = () => ` 
//     ${isScrolled ? 'text-black' : 'text-white'}
//     hover:${isScrolled ? 'text-gray-700' : 'text-blue-400'}
//     transition-colors
//     cursor-pointer
//   `;

//   const navbarStyle = `
//     fixed w-full z-50
//     ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
//     transition-colors duration-300
//   `;

//   return (
//     <nav className={navbarStyle}>
//       <div className="container mx-auto px-4 lg:px-32">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/">
//             <div className="relative w-[80px] h-[60px] sm:w-[100px] sm:h-[80px]">
//               <Image
//                 src="/images/image 1.png"
//                 alt="BeSmart Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </Link>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             className="lg:hidden block text-2xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle Navigation Menu"
//           >
//             {isMenuOpen ? <X className={getIconStyle()} /> : <Menu className={getIconStyle()} />}
//           </button>

//           {/* Desktop & Mobile Navigation */}
//           <div
//             className={`lg:flex flex-1 items-center justify-end ${
//               isMenuOpen ? 'block' : 'hidden'
//             } lg:block`}
//           >
//             <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-4 lg:mt-0">
//               <li>
//                 <Link href="/" className={getLinkStyle('/')}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className={getLinkStyle('/about')}>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/how-it-works" className={getLinkStyle('/how-it-works')}>
//                   How It Works
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className={getLinkStyle('/contact')}>
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 {/* Search Icon */}
//                 <button
//                   className={getIconStyle()}
//                   aria-label="Search"
//                 >
//                   <Search className="w-5 h-5" />
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


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
    ${isScrolled ? 'bg-white shadow-md' : 'bg-black/20 backdrop-blur-sm'}
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

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden block text-2xl p-2 rounded-md bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${getIconStyle()}`} />
            ) : (
              <Menu className={`w-6 h-6 ${getIconStyle()}`} />
            )}
          </button>

          {/* Desktop & Mobile Navigation */}
          <div
            className={`
              lg:flex flex-1 items-center justify-end
              ${isMenuOpen ? 'flex' : 'hidden'}
              lg:relative absolute top-full left-0 right-0
              ${isScrolled ? 'bg-white' : 'bg-black/80 lg:bg-transparent'}
              lg:bg-transparent
            `}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 py-4 lg:py-0 w-full lg:w-auto px-4 lg:px-0">
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

