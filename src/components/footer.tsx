import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className={`${raleway.className} text-lg sm:text-xl font-bold mb-4 sm:mb-0`}>
            Social Media Platforms and Video Channels
          </h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-100 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-gray-100 transition-colors">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-gray-100 transition-colors">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link href="#" className="hover:text-gray-100 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-700 space-y-4 sm:space-y-0">
          <div className={`${raleway.className} text-sm sm:text-base`}>
            © 2024 BeSmart CyberDefender. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors text-sm sm:text-base font-semibold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors text-sm sm:text-base font-semibold">
              Terms of Service
            </Link>
            <Link href="/support" className="hover:text-gray-300 transition-colors text-sm sm:text-base font-semibold">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
