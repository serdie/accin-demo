"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/Card";
import { Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function ProjectDetail() {
  const params = useParams();
  
  return (
    <div className="space-y-6">
      <Link href="/projects" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-800">
        <ArrowLeft size={16} className="mr-1" /> Volver a Proyectos
      </Link>
      
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex gap-6 items-center">
        <div className="w-16 h-16 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100"><Briefcase size={32} className="text-teal-600"/></div>
        <div>
          <Badge variant="success" className="mb-2">Activo</Badge>
          <h1 className="text-3xl font-black text-slate-900">Proyecto Modelo DEMO ({params.id})</h1>
          <p className="text-slate-500 mt-1">Este es un mock autogenerado para mostrar cómo se enlaza la vista en detalle.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Información General</h3>
            <p className="text-slate-600 text-sm">Interfaz preparada para integrar el resumen financiero, justificación técnica y KPIs del proyecto específico frente a los requerimientos de la Licitación IACCIN.</p>
            <div className="mt-8">
              <div className="animate-pulse bg-slate-100 h-40 rounded-lg w-full mb-4"></div>
              <div className="animate-pulse bg-slate-100 h-8 w-1/2 rounded-lg"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Equipo Técnico</h3>
            <p className="text-xs text-slate-500 mb-6">Personas asignadas a la ejecución de este proyecto.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-200"></div><div className="h-4 bg-slate-100 rounded w-24"></div></li>
              <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-200"></div><div className="h-4 bg-slate-100 rounded w-32"></div></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
