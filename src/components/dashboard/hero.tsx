'use client';

import { ChevronDown } from 'lucide-react';
import { Raleway } from 'next/font/google';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const raleway = Raleway({ subsets: ['latin'] });

export function Hero({ query, type }: { query?: string; type?: string }) {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('');
    const [category, setCategory] = useState('url');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [inputError, setInputError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        setHasSearched(!!query);
    }, [query]);

    useEffect(() => {
        validateInput(searchInput, searchType);
    }, [searchInput, searchType]);

    const validateInput = (input: string, type: string) => {
        if (!input && !type) {
            setInputError('');
            return false;
        }
        if (!input) {
            setInputError('Please enter a value');
            return false;
        }
        if (!type) {
            setInputError('Please select a type');
            return false;
        }

        switch (type) {
            case 'platform_username':
                if (!/^[a-zA-Z0-9_]{3,20}$/.test(input)) {
                    setInputError('Invalid username format');
                    return false;
                }
                break;
            case 'platform_id':
                if (!/^[a-zA-Z0-9]{5,15}$/.test(input)) {
                    setInputError('Invalid platform ID format');
                    return false;
                }
                break;
            case 'phone':
                if (!/^\+?[1-9]\d{1,14}$/.test(input)) {
                    setInputError('Invalid phone number');
                    return false;
                }
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
                    setInputError('Invalid email address');
                    return false;
                }
                break;
            case 'payment':
                if (!/^[a-zA-Z0-9]{10,20}$/.test(input)) {
                    setInputError('Invalid payment account format');
                    return false;
                }
                break;
            case 'ip':
                if (!/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(input)) {
                    setInputError('Invalid IP address');
                    return false;
                }
                break;
            default:
                setInputError('');
        }

        setInputError('');
        return true;
    };

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateInput(searchInput, searchType)) return;

        setIsLoading(true);
        setError('');

        try {
            const { data, error: supabaseError } = await supabase
                .from('analysis_requests')
                .insert([
                    {
                        query: searchInput,
                        type: searchType,
                        category: category,
                        created_at: new Date().toISOString(),
                        status: 'pending'
                    }
                ])
                .select()
                .single();

            if (supabaseError) {
                throw supabaseError;
            }

            const redirectUrl = `/results/${data.id}`;
            router.push(redirectUrl);
        } catch (err) {
            setError('Failed to submit analysis request. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const isButtonDisabled = !searchInput || !searchType || !!inputError || isLoading;

    return (
        <div className="relative h-[70vh]">
            <section className="h-full bg-gradient-to-br from-[#B4E7ED] via-[#68C5CC] to-[#68C5CC]">
                <div className="container mx-auto flex flex-col items-center justify-center h-full px-4">
                    <div className="max-w-4xl w-full">
                        <h1 className={`${raleway.className} text-3xl sm:text-4xl font-bold mb-4 text-center text-white`}>
                            Protecting you from online scams in a fast, reliable, and user-friendly way.
                        </h1>
                        <p className={`${raleway.className} text-lg mb-8 text-center text-white`}>
                            Fast, reliable, and user-friendly detection to keep you safe, with &quot;BeSmart&quot;!
                        </p>
                        <form onSubmit={handleAnalyze} className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex items-center gap-1 w-full">
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
                                    disabled={isButtonDisabled}
                                    className={`${raleway.className} w-[140px] bg-[#5bbfce] hover:bg-[#4aa9b8] text-white py-2.5 px-6 rounded-lg text-sm font-semibold transition-colors focus:outline-none ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? 'Analyzing...' : 'Analyze Now'}
                                </button>
                            </div>
                            {inputError && (
                                <p className={`${raleway.className} text-red-500 text-sm w-full text-left`}>
                                    {inputError}
                                </p>
                            )}
                        </form>
                        {error && (
                            <p className={`${raleway.className} text-red-500 mt-2 text-sm`}>
                                {error}
                            </p>
                        )}
                        <p className={`${raleway.className} text-sm text-white/80 mt-4 text-left`}>
                            {hasSearched ? (
                                <>Your Searched: <span className="font-semibold">{query}</span></>
                            ) : (
                                '*Optional if type of information is unknown'
                            )}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
