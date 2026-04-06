"use client";

import React from "react";
import { useAuth } from "@/lib/auth";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileUp, BookOpen, Target, CheckCircle2 } from "lucide-react";

export default function ParticipantPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-[#0f766e] rounded-xl p-8 text-white flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">¡Hola, {user?.name.split(" ")[0] || "Participante"}!</h1>
          <p className="text-teal-100">Bienvenido a tu portal de orientación laboral.</p>
        </div>
        <div className="mt-4 md:mt-0 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
          <p className="text-sm text-teal-100">Próxima sesión</p>
          <p className="font-bold text-lg">Taller de CV - 12 Nov, 10:00</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader title="Tu Itinerario Actual" subtitle="Programa de Competencias Básicas" />
            <CardContent>
              <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 mt-2">
                <div className="relative pl-6">
                  <span className="absolute -left-[11px] top-1 bg-green-500 w-5 h-5 rounded-full ring-4 ring-white flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </span>
                  <h3 className="font-semibold text-slate-800">Entrevista Diagnóstica</h3>
                  <p className="text-sm text-slate-500 mb-1">Completado el 01/10/2024</p>
                  <p className="text-sm text-slate-600">Sesión inicial con tu técnico asignado.</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-1 bg-orange-400 w-4 h-4 rounded-full ring-4 ring-white"></span>
                  <h3 className="font-semibold text-slate-800">Taller de Curriculum</h3>
                  <p className="text-sm text-orange-600 font-medium mb-1">En curso (Próx: 12 Nov)</p>
                  <p className="text-sm text-slate-600">Creación de CV adaptado al sector logística.</p>
                </div>
                <div className="relative pl-6 grayscale opacity-60">
                  <span className="absolute -left-[9px] top-1 bg-slate-300 w-4 h-4 rounded-full ring-4 ring-white"></span>
                  <h3 className="font-semibold text-slate-800">Simulación de Entrevistas</h3>
                  <p className="text-sm text-slate-500 mb-1">Pendiente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Acciones Rápidas" />
            <CardContent className="space-y-3">
              <button className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left">
                <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3">
                  <FileUp size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-800">Subir Documento</h4>
                  <p className="text-xs text-slate-500">Añade tu DNI o títulos</p>
                </div>
              </button>
              
              <button className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left">
                <div className="bg-teal-100 p-2 rounded-full text-teal-700 mr-3">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-800">Material Formativo</h4>
                  <p className="text-xs text-slate-500">Ejercicios y recursos</p>
                </div>
              </button>

              <button className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left">
                <div className="bg-blue-100 p-2 rounded-full text-blue-700 mr-3">
                  <Target size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-800">Responder Encuesta</h4>
                  <p className="text-xs text-blue-600">¡1 pendiente!</p>
                </div>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
