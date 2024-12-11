'use client';

import { useSearchParams } from 'next/navigation';
import { Raleway } from 'next/font/google';
import RiskResult from '@/components/dashboard/riskresult';
import {Footer} from '@/components/footer';
import { Navbar } from '@/components/dashboard/navbar';
import { Hero } from '@/components/dashboard/hero';


const raleway = Raleway({ subsets: ['latin'] });

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const type = searchParams.get('type') || '';


    return (
        <div className="min-h-screen flex flex-col">
                  <Navbar />
            <Hero query={query} type={type} />
            <div className="flex-grow">
                <RiskResult/>
            </div>
        </div>
    );
}
