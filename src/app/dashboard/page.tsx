'use client'

import { MainLayout } from "@/components/layouts/main-layout";
import RiskMeter from "@/components/dashboard/riskmeter";
// import RiskResult from "@/components/dashboard/riskresult";

export default function Dashboard() {
  return (
    <MainLayout>
      <RiskMeter />
      {/* <RiskResult/> */}
    </MainLayout>
  );
}
