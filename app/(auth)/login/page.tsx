import { RoleSelector } from "@/components/auth/RoleSelector";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logotipo ACH" className="h-24 w-auto object-contain drop-shadow-md" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#0f766e] mb-1">
          Proyecto <span className="text-[#ea580c]">ACCIN</span>
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 border-b pb-4">
          Itinerarios Conectados
        </h2>
        <p className="mt-4 text-sm font-medium text-slate-500 bg-slate-100 p-2 rounded-lg border border-slate-200">
          Prototipo desarrollado por <strong>Espacios Castellanos de Innovación (EC‑Innova)</strong> para la licitación ACCIN.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <RoleSelector />
      </div>
    </div>
  );
}
