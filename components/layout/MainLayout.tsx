"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { 
  Users, 
  Briefcase, 
  Building2, 
  LogOut, 
  Menu, 
  X, 
  LayoutDashboard,
  Settings,
  Target
} from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redirección si no hay usuario (esto normalmente iría en un middleware, pero para el prototipo lo resolvemos fácil aquí o en componentes de orden superior)
  React.useEffect(() => {
    if (!user && pathname !== "/login") {
      router.push("/login");
    }
  }, [user, pathname, router]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const isParticipant = user.role === Role.PARTICIPANTE;

  const navItems = isParticipant 
    ? [
        { name: "Mi Itinerario", href: "/participant", icon: Target },
      ]
    : [
        { name: "Dashboard", href: "/", icon: LayoutDashboard },
        { name: "Personas", href: "/beneficiaries", icon: Users },
        { name: "Proyectos", href: "/#projects", icon: Briefcase },
        { name: "Empresas", href: "/#companies", icon: Building2 },
      ];
      
  if (user.role === Role.ADMIN) {
    navItems.push({ name: "Administración", href: "/admin/users", icon: Settings });
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between bg-[#0f766e] text-white p-4">
        <div className="font-bold text-lg">ACCIN Demo</div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0`}>
        <div className="h-full flex flex-col">
          <div className="hidden md:flex h-16 items-center px-6 bg-[#0f766e] text-white font-bold text-xl">
            ACH <span className="text-orange-400 ml-1">ACCIN</span>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-orange-50 text-orange-600 font-medium" 
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-orange-500" : "text-slate-400"} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold mr-3">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  <Link href="/profile" className="hover:underline">{user.name}</Link>
                </p>
                <p className="text-xs text-slate-500 truncate">{user.role}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex w-full items-center justify-center space-x-2 px-3 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar role indicator */}
        <header className="bg-orange-100 px-6 py-2 border-b border-orange-200 flex items-center justify-between">
          <div className="text-sm font-medium text-orange-800 flex items-center">
             Estás viendo la demo como: <span className="ml-2 px-2 py-0.5 bg-orange-200 rounded text-orange-900">{user.role}</span>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </div>
        
        <footer className="py-4 text-center text-sm text-slate-500 bg-white border-t border-slate-200">
          Prototipo ACCIN – Itinerarios Conectados · Demo no productiva para Acción contra el Hambre (ACH)
        </footer>
      </main>
    </div>
  );
}
