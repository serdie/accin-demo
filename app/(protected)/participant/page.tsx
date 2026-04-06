"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileUp, BookOpen, Target, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
export default function ParticipantPage() {
  const { user } = useAuth();
  
  const [modalState, setModalState] = useState<'none' | 'upload' | 'materials' | 'survey'>('none');

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
              <button 
                onClick={() => setModalState('upload')}
                className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left"
              >
                <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3">
                  <FileUp size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-800">Subir Documento</h4>
                  <p className="text-xs text-slate-500">Añade tu DNI o títulos</p>
                </div>
              </button>
              
              <button 
                onClick={() => setModalState('materials')}
                className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
              >
                <div className="bg-teal-100 p-2 rounded-full text-teal-700 mr-3">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-800">Material Formativo</h4>
                  <p className="text-xs text-slate-500">Ejercicios y recursos</p>
                </div>
              </button>

              <button 
                onClick={() => setModalState('survey')}
                className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
              >
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

      <Modal isOpen={modalState === 'upload'} onClose={() => setModalState('none')} title="Subir Nueva Documentación">
         <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setModalState('none'); alert("Documento enviado a tu expediente. Solo tu técnico podrá validarlo."); }}>
          <p className="text-sm text-slate-600 font-medium bg-orange-50 p-3 rounded-lg border border-orange-100">
            Los documentos que subas aquí serán accesibles por tu equipo orientador.
          </p>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">Tipo de Documento</label>
            <select className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
              <option>DNI / NIE / Pasaporte</option>
              <option>Curriculum Vitae (PDF)</option>
              <option>Certificado Empadronamiento</option>
              <option>Alta Laboral</option>
            </select>
          </div>
          <div className="border-2 border-dashed border-slate-300 p-8 rounded-lg text-center bg-slate-50 cursor-pointer">
            <span className="text-slate-500 font-medium">Pulsa para elegir archivo desde tu móvil/PC</span>
            <input type="file" className="hidden" />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="ghost" onClick={() => setModalState('none')}>Cancelar</Button>
            <Button type="submit">Enviar Documento</Button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={modalState === 'materials'} onClose={() => setModalState('none')} title="Mi Material Formativo">
        <div className="space-y-4">
          <p className="text-sm text-slate-500">Aquí encontrarás los archivos compartidos por tu orientador en las sesiones grupales.</p>
          <ul className="divide-y divide-slate-100 border border-slate-100 rounded-lg">
            <li className="flex justify-between p-4 hover:bg-slate-50 items-center">
               <div>
                  <h4 className="font-medium text-sm">Guía para el Empleo Local 2024.pdf</h4>
                  <p className="text-xs text-slate-400 mt-1">Asignado hace 2 semanas</p>
               </div>
               <Button variant="outline" size="sm" onClick={() => alert("Comenzando descarga...")}>Bajar</Button>
            </li>
            <li className="flex justify-between p-4 hover:bg-slate-50 items-center">
               <div>
                  <h4 className="font-medium text-sm">Plantilla_CV_Europeo.docx</h4>
                  <p className="text-xs text-slate-400 mt-1">Asignado hace 4 días</p>
               </div>
               <Button variant="outline" size="sm" onClick={() => alert("Comenzando descarga...")}>Bajar</Button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={modalState === 'survey'} onClose={() => setModalState('none')} title="Cuestionario Inicial de Competencias">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setModalState('none'); alert("¡Respuestas registradas en KoboToolbox correctamente!"); }}>
          <p className="text-sm text-slate-600 mb-4">Esta encuesta es breve y nos ayuda a adaptar tu itinerario. Tus respuestas son confidenciales.</p>
          <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-slate-800">1. ¿Cómo de seguro/a te sientes haciendo una búsqueda de empleo por internet?</p>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <label className="flex items-center gap-2"><input type="radio" name="q1" /> Muy inseguro/a (No sé enviar un email)</label>
              <label className="flex items-center gap-2"><input type="radio" name="q1" /> Inseguro/a</label>
              <label className="flex items-center gap-2"><input type="radio" name="q1" /> Neutro</label>
              <label className="flex items-center gap-2"><input type="radio" name="q1" /> Seguro/a (Manejo portales de empleo habituales)</label>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button type="submit" variant="primary">Enviar y Finalizar (Simulado)</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
