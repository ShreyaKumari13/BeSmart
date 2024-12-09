'use client'

import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const raleway = Raleway({ subsets: ['latin'] });

export function Hero() {
    const router = useRouter();

    return (
        <div className="relative h-[80vh]">
            {/* Hero Section with Background Image */}
            <div className="relative h-full">
                {/* Background Image with Next.js Image component */}
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
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <div className="bg-[#1A281F4D] p-8 rounded-lg max-w-3xl">
                        <h1 className={`${raleway.className} text-[34px] font-semibold leading-[39.92px] mb-4`}>
                            Welcome to &quot;BESMART&quot; Scam Detector
                        </h1>
                        <p className={`${raleway.className} text-2xl font-normal leading-[28.18px] mb-6`}>
                            Protecting you from online scams in a fast, reliable, and user-friendly way, with &quot;BeSmart&quot;!
                        </p>
                        <p className={`${raleway.className} text-2xl font-semibold leading-[28.18px] mb-4`}>
                            Key Features Overview:
                        </p>
                        <div className="space-y-2 mb-8">
                            <p className={`${raleway.className} text-xl font-normal leading-[23.48px]`}>
                                Real-Time Risk Analysis
                            </p>
                            <p className={`${raleway.className} text-xl font-normal leading-[23.48px]`}>
                                Comprehensive Database
                            </p>
                            <p className={`${raleway.className} text-xl font-normal leading-[23.48px]`}>
                                Protect Your Digital Identity
                            </p>
                        </div>
                        <button
                            className={`${raleway.className} bg-[#68C5CC] hover:bg-[#4DAF9D] text-white text-xl font-black px-6 py-3 rounded-md transition-colors duration-300`}
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
