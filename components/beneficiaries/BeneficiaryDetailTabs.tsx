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
                 <div className="border-2 border-dashed border-slate-300 rounded-lg p-10 text-center mb-6 bg-slate-50 transition-colors hover:bg-slate-100 hover:border-teal-400">
                    <p className="font-semibold text-slate-700 mb-2">Arrastra y suelta documentos aquí o haz clic para subir</p>
                    <p className="text-slate-500 text-sm mb-4">
                      En la versión final, estos documentos se almacenarán de forma segura en SharePoint corporativo y se enlazarán con los formularios recogidos en KoboToolbox.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">Seleccionar Archivos</Button>
                 </div>
                 
                 <div className="flex items-center justify-between mb-4">
                   <h4 className="font-medium text-slate-800">Documentos Subidos</h4>
                   <div className="flex gap-2">
                     <span className="text-[10px] font-bold bg-[#0364B8] text-white px-2 py-0.5 rounded flex items-center">SharePoint Sync</span>
                     <span className="text-[10px] font-bold bg-[#146AA2] text-white px-2 py-0.5 rounded flex items-center">KoboToolbox</span>
                   </div>
                 </div>
                 
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
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-purple-100 rounded-full text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-4">Inteligencia Artificial para Priorizar el Acompañamiento</h3>
                <div className="text-slate-600 text-sm space-y-4 max-w-lg mx-auto text-center">
                  <p>
                    La IA analiza el perfil para sugerir el itinerario óptimo, calcular la probabilidad de éxito e identificar posibles riesgos de abandono de forma temprana.
                  </p>
                  <p className="font-medium text-purple-800">
                    Se entrenará exclusivamente con datos históricos anonimizados de ACH. Su objetivo es apoyar tus decisiones técnicas, no automatizarlas.
                  </p>
                  
                  <div className="mt-8 text-left bg-white p-4 rounded-lg border border-purple-100">
                    <h4 className="font-semibold text-slate-700 mb-2">Quick wins implementados en esta demo:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-500">
                      <li>Autocompletado inteligente desde CV / Documentos.</li>
                      <li>Detección de factores clave (brecha digital, absentismo).</li>
                      <li>Dashboard resumen de éxito (visible en el panel derecho).</li>
                    </ul>
                  </div>
                </div>
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
