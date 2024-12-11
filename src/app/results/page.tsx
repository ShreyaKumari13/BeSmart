'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import RiskResult from '@/components/dashboard/riskresult';
import { MainLayout } from '@/components/layouts/main-layout';

function ResultsContent() {
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

export default function ResultsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultsContent />
        </Suspense>
    );
}
