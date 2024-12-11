'use client';

import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const raleway = Raleway({ subsets: ['latin'] });

export function Hero() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen sm:h-[80vh] flex flex-col justify-center">
            {/* Hero Section with Background Image */}
            <div className="relative h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/image.png" // Ensure this path is correct
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-8">
                    <div className="p-6 sm:p-8 rounded-lg max-w-3xl">
                        {/* Heading */}
                        <h1 className={`${raleway.className} text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4`}>
                            Welcome to &quot;BESMART&quot; Scam Detector
                        </h1>

                        {/* Subtitle */}
                        <p className={`${raleway.className} text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed mb-6`}>
                            Protecting you from online scams in a fast, reliable, and user-friendly way.
                        </p>

                        {/* Key Features */}
                        <p className={`${raleway.className} text-lg sm:text-xl font-semibold leading-relaxed mb-4`}>
                            Key Features Overview:
                        </p>
                        <div className="space-y-2 mb-8">
                            <p className={`${raleway.className} text-sm sm:text-lg font-normal leading-relaxed`}>
                                Real-Time Risk Analysis
                            </p>
                            <p className={`${raleway.className} text-sm sm:text-lg font-normal leading-relaxed`}>
                                Comprehensive Database
                            </p>
                            <p className={`${raleway.className} text-sm sm:text-lg font-normal leading-relaxed`}>
                                Protect Your Digital Identity
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button
                            className={`${raleway.className} bg-[#68C5CC] hover:bg-[#4DAF9D] text-white text-sm sm:text-lg lg:text-xl font-black px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors duration-300`}
                            onClick={() => router.push('/dashboard')}
                        >
                            Try Scam Detector
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
