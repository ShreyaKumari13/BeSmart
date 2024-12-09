'use client'

import { Hero } from "@/components/dashboard/hero";
import { Navbar } from "@/components/dashboard/navbar";
import RiskMeter from "@/components/dashboard/riskmeter";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RiskMeter />

    </main>
  );
}
