"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { MOCK_BENEFICIARIES, Beneficiary } from "@/data/beneficiaries";
import { BeneficiaryList } from "@/components/beneficiaries/BeneficiaryList";
import { BeneficiaryFilters } from "@/components/beneficiaries/BeneficiaryFilters";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function BeneficiariesPage() {
  const { user } = useAuth();
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>(MOCK_BENEFICIARIES);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeneficiaries = beneficiaries.filter(b => {
    // Filtrado condicional según rol (simulado)
    if (user?.role === Role.TECNICO && b.assignedTechnicianId !== user.id) {
      // Para la demo, el MOCK_BENEFICIARIES tiene b3 asignado a "u-tecnico2"
      return false;
    }
    
    // Filtrado por texto
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return b.firstName.toLowerCase().includes(term) || b.lastName.toLowerCase().includes(term);
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Personas Beneficiarias</h1>
          <p className="text-sm text-slate-500">Gestión y seguimiento de itinerarios</p>
        </div>
        
        {user?.role !== Role.PARTICIPANTE && (
          <Button variant="primary" className="flex items-center">
            <Plus size={18} className="mr-2" />
            Nuevo Beneficiario
          </Button>
        )}
      </div>

      <BeneficiaryFilters onSearch={setSearchTerm} />
      
      <BeneficiaryList beneficiaries={filteredBeneficiaries} />
    </div>
  );
}
