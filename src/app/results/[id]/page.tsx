'use server';

import RiskResult from '@/components/dashboard/riskresult';
import { MainLayout } from '@/components/layouts/main-layout';
import { supabase } from '@/lib/supabase';

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
