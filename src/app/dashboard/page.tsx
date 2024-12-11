'use client'

import { MainLayout } from "@/components/layouts/main-layout";
import { Hero } from "@/components/dashboard/hero";
import { Navbar } from "@/components/dashboard/navbar";
import RiskMeter from "@/components/dashboard/riskmeter";
// import RiskResult from "@/components/dashboard/riskresult";

export default function Dashboard() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <RiskMeter />
      {/* <RiskResult/> */}
    </MainLayout>
  );
}
