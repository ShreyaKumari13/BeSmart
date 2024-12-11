export default function ResultsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-white">
            {children}
        </main>
    );
}
