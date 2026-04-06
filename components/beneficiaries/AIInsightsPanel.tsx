"use client";

import React, { useState, useEffect } from "react";
import { getRiskAndPathwayInsights, AIPathwayInsights, getAutocompleteSuggestions } from "@/lib/ai";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, AlertTriangle, TrendingUp, CheckCircle, BrainCircuit } from "lucide-react";

export function AIInsightsPanel({ beneficiaryId }: { beneficiaryId: string }) {
  const [insights, setInsights] = useState<AIPathwayInsights | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando la llamada al endpoint de IA
    getRiskAndPathwayInsights(beneficiaryId).then(data => {
      setInsights(data);
      setLoading(false);
    });
  }, [beneficiaryId]);

  if (loading) {
    return (
      <Card className="border-purple-200 shadow-sm animate-pulse">
        <CardContent className="p-6 h-64 flex items-center justify-center">
          <div className="flex flex-col items-center text-purple-400">
            <BrainCircuit size={40} className="mb-4 animate-bounce" />
            <p>Analizando perfil con IA...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!insights) return null;

  return (
    <div className="space-y-6">
      <Card className="border-purple-200 border-2 overflow-hidden shadow-sm">
        <div className="bg-purple-50 px-6 py-4 border-b border-purple-100 flex items-center justify-between">
          <div className="flex items-center text-purple-800 font-semibold">
            <Sparkles size={20} className="mr-2 text-purple-600" />
            Insights del Itinerario
          </div>
          <Badge variant="info">Modelo v2.1</Badge>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-1">Itinerario Sugerido</p>
            <div className="p-3 bg-purple-50 text-purple-900 rounded-md font-medium inline-flex items-center">
              {insights.recommendedPathway}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center text-slate-500 mb-2">
                <TrendingUp size={16} className="mr-1" /> Probabilidad de Éxito
              </div>
              <div className="text-2xl font-bold text-slate-800">
                {insights.successProbability}%
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center text-slate-500 mb-2">
                <AlertTriangle size={16} className="mr-1" /> Riesgo de Abandono
              </div>
              <div>
                {insights.riskLevel === "BAJO" && <Badge variant="success" className="text-sm">Bajo</Badge>}
                {insights.riskLevel === "MEDIO" && <Badge variant="warning" className="text-sm">Medio</Badge>}
                {insights.riskLevel === "ALTO" && <Badge variant="danger" className="text-sm">Alto</Badge>}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700 mb-3">Factores detectados por la IA:</p>
            <ul className="space-y-2">
              {insights.factors.map((factor, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Autocompletado Rápido" subtitle="Sugerencias detectadas en la documentación subida" />
        <CardContent>
          <div className="p-4 border border-dashed border-slate-300 rounded-lg bg-slate-50 flex items-start">
            <BrainCircuit className="text-slate-400 mr-3 mt-1" />
            <div>
              <p className="text-sm text-slate-700 mb-3">
                Hemos extraído los siguientes datos del <strong>"Curriculum_v2.pdf"</strong>. ¿Quieres aplicarlos al perfil?
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-xs flex justify-between bg-white p-2 rounded border">
                  <span className="text-slate-500">Nivel Formativo</span>
                  <span className="font-medium">Formación Profesional Grado Medio</span>
                </div>
                <div className="text-xs flex justify-between bg-white p-2 rounded border">
                  <span className="text-slate-500">Sector Preferente</span>
                  <span className="font-medium">Logística / Almacén</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Aplicar sugerencias
              </Button>
            </div>
          </div>
          <p className="text-xs text-center text-slate-400 mt-4 italic">
            * Estas funciones serán potenciadas mediante microservicios en Python y Azure OpenAI en producción.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
