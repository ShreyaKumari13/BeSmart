'use client';

import { useSearchParams } from 'next/navigation';
import { Raleway } from 'next/font/google';
import RiskResult from '@/components/dashboard/riskresult';
import Footer from '@/components/footer';

const raleway = Raleway({ subsets: ['latin'] });

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const type = searchParams.get('type');
    const category = searchParams.get('category');

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-br from-[#B4E7ED] via-[#68C5CC] to-[#68C5CC] py-6">
                <div className="container mx-auto px-4">
                    <h1 className={`${raleway.className} text-2xl font-bold text-white mb-4`}>
                        Analysis Results
                    </h1>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className={`${raleway.className} text-white`}>
                            Your Searched: <span className="font-semibold">{query}</span>
                            {type && <span className="ml-2">({type})</span>}
                            {category && category !== '   ' && <span className="ml-2">Category: {category}</span>}
                        </p>
                    </div>
                </div>
            </div>

            {/* Risk Result Section */}
            <div className="flex-grow">
                <RiskResult searchQuery={query || ''} searchType={type || ''} category={category || ''} />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
