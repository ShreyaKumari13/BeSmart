'use server';

import { Raleway } from 'next/font/google';
import RiskResult from '@/components/dashboard/riskresult';
import { MainLayout } from '@/components/layouts/main-layout';
import { supabase } from '@/lib/supabase';

const raleway = Raleway({ subsets: ['latin'] });

interface PageProps {
    params: {
        id: string;
    };
}

export default async function ResultPage({ params }: PageProps) {
    const { data } = await supabase
        .from('analysis_requests')
        .select('query, type')
        .eq('id', params.id)
        .single();

    return (
        <MainLayout query={data?.query || ''} type={data?.type || ''}>
            <RiskResult />
        </MainLayout>
    );
}
