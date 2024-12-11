'use client';

import { useSearchParams } from 'next/navigation';
import RiskResult from '@/components/dashboard/riskresult';
import { MainLayout } from '@/components/layouts/main-layout';

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
