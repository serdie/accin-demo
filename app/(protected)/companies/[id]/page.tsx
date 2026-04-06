"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/Card";
import { Building2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function CompanyDetail() {
  const params = useParams();
  
  return (
    <div className="space-y-6">
      <Link href="/companies" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-800">
        <ArrowLeft size={16} className="mr-1" /> Volver a Empresas
      </Link>
      
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex gap-6 items-center">
        <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100"><Building2 size={32} className="text-blue-600"/></div>
        <div>
          <Badge variant="success" className="mb-2">Empresa Colaboradora</Badge>
          <h1 className="text-3xl font-black text-slate-900">Empresa DEMO ({params.id})</h1>
          <p className="text-slate-500 mt-1">Este es un mock autogenerado para mostrar la visualización CRM B2B.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Ofertas de Empleo (Intermediación)</h3>
            <p className="text-slate-600 text-sm">Próximamente... aquí se publicarán ofertas que hagan Match inteligente con nuestros beneficiarios a través de la IA.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Convenios / Prácticas no laborales</h3>
            <p className="text-slate-600 text-sm">Resumen de convenios firmados y alumnos derivados a prácticas formativas dentro del marco de ACCIN.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
