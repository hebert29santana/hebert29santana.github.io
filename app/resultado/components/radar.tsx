"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

type Props = {
  data: Array<{
    subject: string;
    A: number;
  }>;
};

export const CustomRadarChart = ({ data }: Props) => {
  const isMobile = useIsMobile();
  return (
    <RadarChart
      cx={isMobile ? 175 : 320}
      cy={isMobile ? 100 : 150}
      outerRadius={isMobile ? 50 : 100}
      width={isMobile ? 300 : 640}
      height={isMobile ? 200 : 300}
      data={data}
      compact
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={90} />
      <Radar
        name="Resultado"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.5}
      />
    </RadarChart>
  );
};
