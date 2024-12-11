'use client';

import { Hero } from "@/components/dashboard/hero";
import { Navbar } from "@/components/dashboard/navbar";

interface MainLayoutProps {
    children: React.ReactNode;
    query?: string;
    type?: string;
}

export function MainLayout({ children, query, type }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero query={query} type={type} />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
}
