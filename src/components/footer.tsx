import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'] });

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Social Media Section */}
          <div>
            <h2
              className={`${raleway.className}`} 
              style={{
                fontFamily: 'Raleway',
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: '23.48px',
                textAlign: 'left',
                color: '#FFFFFF'
              }}
            >
              Social Media Platforms and Video Channels
            </h2>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <div
              className={`${raleway.className}`}
              style={{
                fontFamily: 'Raleway',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '16.44px',
                textAlign: 'left',
                color: '#FFFFFF'
              }}
            >
              © 2024 BeSmart CyberDefender. All rights reserved.
            </div>
            <div className="flex space-x-6" style={{
                fontFamily: 'Raleway',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '18.78px',
                textAlign: 'left',
                color: '#FFFFFF'
              }}>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="hover:text-gray-300 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}