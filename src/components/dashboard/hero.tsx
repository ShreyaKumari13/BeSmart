'use client';

import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export function Hero() {
    return (
        <div className="relative h-[70vh]">
            <section className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500">
                <div className="container mx-auto flex items-center justify-center h-full text-center text-white">
                    <div className="max-w-4xl">
                        <h1 className={`${raleway.className} text-3xl sm:text-4xl font-bold mb-4`}>
                            Protecting you from online scams in a fast, reliable, and user-friendly way.
                        </h1>
                        <p className={`${raleway.className} text-lg mb-8`}>
                            Fast, reliable, and user-friendly detection to keep you safe, with &quot;BeSmart&quot;!
                        </p>
                        <div className="flex items-center gap-2 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <select className="w-[120px] bg-white/90 text-black py-2 px-3 rounded-md text-sm">
                                <option value="">Select type</option>
                                <option value="url">URL</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                            <input
                                type="text"
                                placeholder="URL, email, phone, platform A/C, payment A/C, etc"
                                className="flex-1 bg-white/90 text-black py-2 px-3 rounded-md text-sm"
                            />
                            <select className="w-[200px] bg-white/90 text-black py-2 px-3 rounded-md text-sm">
                                <option value="">Please Select Type</option>
                                <option value="type1">Platform Username</option>
                                <option value="type2">Platform ID</option>
                                <option value="type3">Phone</option>
                                <option value="type1">Email</option>
                                <option value="type2">Payment A/C</option>
                                <option value="type3">IP Address</option>
                            </select>
                            <button 
                                className="bg-[#5bbfce] hover:bg-[#4aa9b8] text-white py-2 px-6 rounded-md" 
                                style={{
                                    fontFamily: 'Raleway',
                                    fontSize: '20px',
                                    fontWeight: 800,
                                    lineHeight: '23.48px',
                                    textAlign: 'left'
                                }}
                            >
                                Analyze Now
                            </button>
                        </div>



                        <p className="text-sm mt-4 opacity-80">
                            *Optional if type of information is unknown
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
