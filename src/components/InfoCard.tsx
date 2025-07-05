"use client";
import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 w-full max-w-sm flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <h2 className="text-gray-700 font-semibold text-lg">{title}</h2>
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
