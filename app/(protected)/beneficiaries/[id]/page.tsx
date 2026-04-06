"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { MOCK_BENEFICIARIES } from "@/data/beneficiaries";
import { BeneficiaryDetailTabs } from "@/components/beneficiaries/BeneficiaryDetailTabs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function BeneficiaryDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const beneficiary = MOCK_BENEFICIARIES.find(b => b.id === id);

  if (!beneficiary) {
    return <div className="p-8 text-center">Beneficiario no encontrado</div>;
  }

  return (
    <div className="space-y-6">
      <Link href="/beneficiaries" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowLeft size={16} className="mr-1" /> Volver al listado
      </Link>

      <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center text-2xl font-bold mr-4">
            {beneficiary.firstName.charAt(0)}{beneficiary.lastName.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {beneficiary.firstName} {beneficiary.lastName}
            </h1>
            <div className="flex items-center mt-1 space-x-2">
              <span className="text-sm text-slate-500">{beneficiary.employmentStatus}</span>
              <span className="text-slate-300">•</span>
              <Badge variant="success">Activo</Badge>
            </div>
          </div>
        </div>
      </div>

      <BeneficiaryDetailTabs beneficiary={beneficiary} />
    </div>
  );
}
