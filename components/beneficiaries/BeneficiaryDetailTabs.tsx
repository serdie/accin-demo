"use client";

import React, { useState } from "react";
import { Beneficiary } from "@/data/beneficiaries";
import { AIInsightsPanel } from "./AIInsightsPanel";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface Props {
  beneficiary: Beneficiary;
}

export function BeneficiaryDetailTabs({ beneficiary }: Props) {
  const [activeTab, setActiveTab] = useState("datos");

  const tabs = [
    { id: "datos", label: "Datos Personales" },
    { id: "itinerario", label: "Itinerario" },
    { id: "documentos", label: "Documentación" },
    { id: "ia", label: "IA y Recomendaciones", badge: "Nuevo" },
  ];

  return (
    <div>
      <div className="border-b border-slate-200 mb-6 flex overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
              activeTab === tab.id 
                ? "border-[#ea580c] text-[#ea580c]" 
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-2 bg-purple-100 text-purple-700 text-xs py-0.5 px-2 rounded-full">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${activeTab === 'ia' ? 'md:col-span-2' : 'md:col-span-3'}`}>
          
          {activeTab === "datos" && (
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Nombre" defaultValue={beneficiary.firstName} readOnly />
                    <Input label="Apellidos" defaultValue={beneficiary.lastName} readOnly />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Email" defaultValue={beneficiary.email} readOnly />
                    <Input label="Teléfono" defaultValue={beneficiary.phone} readOnly />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Edad" defaultValue={beneficiary.age} readOnly />
                    <Input label="Nivel Formativo" defaultValue={beneficiary.educationLevel} readOnly />
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button variant="outline" className="mr-2">Cancelar</Button>
                    <Button>Guardar Cambios</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === "itinerario" && (
            <div className="space-y-4">
              <div className="flex justify-end">
                <Button size="sm">Registrar Actividad</Button>
              </div>
              {beneficiary.activities.length === 0 ? (
                <Card><CardContent className="p-6 text-center text-slate-500">No hay actividades registradas.</CardContent></Card>
              ) : (
                <div className="relative border-l border-slate-200 ml-3 space-y-6">
                  {beneficiary.activities.map(act => (
                    <div key={act.id} className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 top-1.5 ring-4 ring-white"></div>
                      <h4 className="font-semibold text-slate-800">{act.type}</h4>
                      <p className="text-xs text-orange-600 font-medium mb-1">{act.date}</p>
                      <p className="text-sm text-slate-600 bg-white p-3 border rounded-lg shadow-sm mt-2">{act.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "documentos" && (
            <Card>
              <CardContent className="p-6">
                 <div className="border-2 border-dashed border-slate-300 rounded-lg p-10 text-center mb-6 bg-slate-50">
                    <p className="text-slate-500 text-sm">Arrastra y suelta documentos aquí o haz clic para subir</p>
                    <Button variant="outline" size="sm" className="mt-4">Seleccionar Archivos</Button>
                 </div>
                 
                 <h4 className="font-medium text-slate-800 mb-4">Documentos Subidos</h4>
                 {beneficiary.documents.length === 0 ? (
                    <p className="text-sm text-slate-500">No hay documentos adjuntos.</p>
                 ) : (
                    <ul className="divide-y divide-slate-100 border rounded-lg">
                      {beneficiary.documents.map(doc => (
                        <li key={doc.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                          <div>
                            <p className="font-medium text-sm text-slate-800">{doc.name}</p>
                            <p className="text-xs text-slate-500">{doc.type} • Subido el {doc.uploadDate}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600">Descargar</Button>
                        </li>
                      ))}
                    </ul>
                 )}
              </CardContent>
            </Card>
          )}

          {activeTab === "ia" && (
            <Card className="bg-slate-50 border-dashed">
              <CardContent className="p-8 text-center text-slate-500">
                Panel de IA a la derecha
              </CardContent>
            </Card>
          )}
          
        </div>

        {/* Panel lateral IA visible sólo en su pestaña (o si lo prefieres siempre, quita la condición) */}
        {activeTab === "ia" && (
          <div className="md:col-span-1">
            <AIInsightsPanel beneficiaryId={beneficiary.id} />
          </div>
        )}
      </div>
    </div>
  );
}
