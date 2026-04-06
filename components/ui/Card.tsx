import React from "react";

export function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`bg-white rounded-lg border border-slate-200 shadow-sm ${className || ''}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
  return (
    <div className={`px-6 py-4 border-b border-slate-100 ${className || ''}`}>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
  );
}

export function CardContent({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`p-6 ${className || ''}`}>
      {children}
    </div>
  );
}
