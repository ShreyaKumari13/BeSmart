'use client';

import { useSearchParams } from 'next/navigation';
import { Raleway } from 'next/font/google';
import RiskResult from '@/components/dashboard/riskresult';
import {Footer} from '@/components/footer';
import { MainLayout } from '@/components/layouts/main-layout';

const raleway = Raleway({ subsets: ['latin'] });

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const type = searchParams.get('type') || '';

    return (
        <MainLayout query={query} type={type}>
            <RiskResult/>
            {/* <Footer /> */}
        </MainLayout>
    );
}
