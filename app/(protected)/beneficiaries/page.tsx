"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { MOCK_BENEFICIARIES, Beneficiary } from "@/data/beneficiaries";
import { BeneficiaryList } from "@/components/beneficiaries/BeneficiaryList";
import { BeneficiaryFilters } from "@/components/beneficiaries/BeneficiaryFilters";
import { Button } from "@/components/ui/Button";
import { Plus, Upload } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";

export default function BeneficiariesPage() {
  const { user } = useAuth();
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>(MOCK_BENEFICIARIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Personas Beneficiarias</h1>
          <p className="text-sm font-medium text-teal-700 mt-1 flex items-center">
            {user?.role === Role.ADMIN && "Viendo beneficiarios de todas las delegaciones."}
            {user?.role === Role.GESTOR && "Viendo beneficiarios de tu oficina."}
            {user?.role === Role.TECNICO && "Viendo beneficiarios de tus proyectos asignados."}
          </p>
        </div>
        
        {user?.role !== Role.PARTICIPANTE && (
          <Button variant="primary" className="flex items-center" onClick={() => setIsModalOpen(true)}>
            <Plus size={18} className="mr-2" />
            Nuevo Beneficiario
          </Button>
        )}
      </div>

      <BeneficiaryFilters onSearch={setSearchTerm} />
      
      <BeneficiaryList beneficiaries={filteredBeneficiaries} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Alta de Nueva Persona Beneficiaria" maxWidth="max-w-2xl">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("¡Beneficiario registrado con éxito! (Simulación)"); }}>
          <div className="bg-blue-50 p-4 rounded-lg flex items-start text-blue-800 border border-blue-100 mb-6">
            <Upload size={20} className="mr-3 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm">¿Tienes datos en otra plataforma?</p>
              <p className="text-xs mt-1">Puedes importar beneficiarios directamente desde KoboToolbox, Ficheros Excel corporativos, o conectar con el CRM de Servicios Sociales.</p>
              <Button type="button" variant="outline" className="mt-3 bg-white h-8 text-xs border-blue-200">Importar Datos Múltiples</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nombre" placeholder="P. ej. Carlos" required />
            <Input label="Apellidos" placeholder="P. ej. Sánchez" required />
            <Input label="Documento Identidad" placeholder="12345678Z" required />
            <Input label="Edad" type="number" placeholder="25" />
            <Input label="Situación Laboral" placeholder="Desempleado < 6 meses" />
            
            <div className="space-y-1 w-full">
              <label className="block text-sm font-medium text-slate-700">Proyecto Asignado</label>
              <select className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Vives Emplea</option>
                <option>Vives Emprende</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button type="submit">Guardar y Crear Ficha</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
