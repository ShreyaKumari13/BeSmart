import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import BeSmartSection from "@/components/besmartsection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BeSmartSection />
    </main>
  )
}