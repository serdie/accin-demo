// Funciones mock de IA para ser integradas posteriormente con Azure OpenAI / Python FastAPI

export interface AIAutocompleteSuggestion {
  field: string;
  suggestedValue: string;
  confidence: number;
}

/**
 * Simula el endpoint: POST /api/v1/ai/autocomplete
 * Recibe datos parciales y devuelve sugerencias basadas en historial.
 */
export const getAutocompleteSuggestions = async (partialData: any): Promise<AIAutocompleteSuggestion[]> => {
  // Simular retardo de red
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    { field: "educationLevel", suggestedValue: "Educación Secundaria Obligatoria", confidence: 0.92 },
    { field: "employmentStatus", suggestedValue: "Desempleado > 1 año", confidence: 0.85 },
    { field: "pathwayType", suggestedValue: "Vives Emplea", confidence: 0.95 },
  ];
};

export interface AIPathwayInsights {
  recommendedPathway: string;
  successProbability: number;
  riskLevel: "BAJO" | "MEDIO" | "ALTO";
  factors: string[];
}

/**
 * Simula el endpoint: POST /api/v1/ai/insights
 * Retorna recomendaciones sobre el itinerario y evaluación de riesgo.
 */
export const getRiskAndPathwayInsights = async (beneficiaryId: string): Promise<AIPathwayInsights> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Lógica simple mock: dependiendo del ID mostramos uno u otro
  if (beneficiaryId === "b2") {
    return {
      recommendedPathway: "Programa de Emprendimiento (Vives Emprende)",
      successProbability: 85,
      riskLevel: "BAJO",
      factors: [
        "Alta motivación en encuestas previas",
        "Formación superior completada",
        "Participación en todas las sesiones iniciales"
      ]
    };
  }

  // Por defecto (ej. b1 y otros)
  return {
    recommendedPathway: "Programa de Competencias Digitales y Empleabilidad Básica",
    successProbability: 60,
    riskLevel: "MEDIO",
    factors: [
      "Brecha digital detectada en formulario de entrada",
      "Responsabilidades familiares (posible impacto en asistencia)",
      "Largo periodo de inactividad laboral (>2 años)"
    ]
  };
};
