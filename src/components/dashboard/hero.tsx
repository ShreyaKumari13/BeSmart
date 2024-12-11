'use client';

import { ChevronDown } from 'lucide-react';
import { Raleway } from 'next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const raleway = Raleway({ subsets: ['latin'] });

export function Hero() {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('');
    const [category, setCategory] = useState('url');

    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchInput.trim()) return;
        
        // Navigate to results page with search parameters
        router.push(`/results?query=${encodeURIComponent(searchInput)}&type=${encodeURIComponent(searchType)}&category=${encodeURIComponent(category)}`);
    };

    return (
        <div className="relative h-[70vh]">
            <section className="h-full bg-gradient-to-br from-[#B4E7ED] via-[#68C5CC] to-[#68C5CC]">
                <div className="container mx-auto flex items-center justify-center h-full text-center text-white">
                    <div className="max-w-4xl">
                        <h1 className={`${raleway.className} text-3xl sm:text-4xl font-bold mb-4`}>
                            Protecting you from online scams in a fast, reliable, and user-friendly way.
                        </h1>
                        <p className={`${raleway.className} text-lg mb-8`}>
                            Fast, reliable, and user-friendly detection to keep you safe, with &quot;BeSmart&quot;!
                        </p>
                        <form onSubmit={handleAnalyze} className="flex items-center gap-1 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-1">
                            <div className="relative">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="appearance-none w-[60px] bg-white text-gray-400 py-2.5 px-2 rounded-lg cursor-pointer font-raleway text-sm focus:outline-none"
                                >
                                    <option value="url">   </option>
                                    <option value="url">URL</option>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="URL, email, phone, platform A/C, payment A/C, etc"
                                className="flex-1 bg-white text-gray-700 py-2.5 px-3 rounded-lg font-raleway text-sm focus:outline-none placeholder:text-gray-400"
                            />
                            <div className="relative">
                                <select
                                    value={searchType}
                                    onChange={(e) => setSearchType(e.target.value)}
                                    className="appearance-none w-[140px] bg-white text-gray-400 py-2.5 px-3 pr-8 rounded-lg cursor-pointer font-raleway text-sm focus:outline-none"
                                >
                                    <option value="">Please Select Type</option>
                                    <option value="platform_username">Platform Username</option>
                                    <option value="platform_id">Platform ID</option>
                                    <option value="phone">Phone</option>
                                    <option value="email">Email</option>
                                    <option value="payment">Payment A/C</option>
                                    <option value="ip">IP Address</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <button
                                type="submit"
                                className={`${raleway.className} bg-[#5bbfce] hover:bg-[#4aa9b8] text-white py-2.5 px-6 rounded-lg text-sm font-semibold transition-colors focus:outline-none`}
                            >
                                Analyze Now
                            </button>
                        </form>
                        <p className="text-sm mt-4 opacity-80 text-left">
                            *Optional if type of information is unknown
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
