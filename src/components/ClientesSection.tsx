"use client";
 
import { MessageSquare } from "lucide-react";
 
interface Cliente {
  id: number;
  nombre: string;
  rubro: string;
  comuna: string;
  logoUrl?: string;
}
 
const CLIENTES: Cliente[] = [
  { id: 1, nombre: "Restobar El Estribo", rubro: "Gastronomía & Menú QR", comuna: "San Vicente" },
  { id: 2, nombre: "Barbería Central", rubro: "Estética & Agenda Online", comuna: "Rancagua" },
  { id: 3, nombre: "Lubricentro O'Higgins", rubro: "Ficha Digital Automotriz", comuna: "San Fernando" },
  { id: 4, nombre: "Minimarket Express", rubro: "Control de Ventas", comuna: "Machalí" },
  { id: 5, nombre: "Transporte Colchagua", rubro: "Hojas de Ruta Digitales", comuna: "Santa Cruz" },
];
 
export default function ClientesSection() {
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20sumar%20mi%20negocio%20a%20Frames.";
 
  return (
    <section className="py-16 bg-slate-cold border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-500 shadow-sm">
            CONFIANZA Y TRAYECTORIA
          </span>
          <h2 className="text-3xl font-extrabold text-primary tracking-tight sm:text-4xl">
            Empresas y Negocios que Digitalizan sus Procesos con Frames
          </h2>
          <p className="text-base text-slate-650 max-w-2xl mx-auto">
            Impulsamos el comercio local en la Región de O&apos;Higgins con tecnología adaptada al mesón y la cocina de cada emprendimiento.
          </p>
        </div>
 
        {/* Clients Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {CLIENTES.map((cliente, idx) => {
            // Alternate hover border color between primary (navy) and accent (neon green)
            const hoverBorderClass = idx % 2 === 0 
              ? "hover:border-accent hover:shadow-accent/5" 
              : "hover:border-primary hover:shadow-primary/5";
 
            return (
              <div
                key={cliente.id}
                className={`bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 ${hoverBorderClass} group`}
              >
                {/* Visual Representation of Client Logo (since we don't have images) */}
                <div className="w-16 h-16 rounded-full bg-slate-cold border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xl font-black text-primary group-hover:text-accent transition-colors">
                    {cliente.nombre.charAt(0)}
                  </span>
                </div>
 
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm text-primary tracking-tight leading-snug">
                    {cliente.nombre}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {cliente.rubro}
                  </p>
                  <p className="text-[10px] text-slate-550 font-medium">
                    {cliente.comuna}, Región de O&apos;Higgins
                  </p>
                </div>
              </div>
            );
          })}
        </div>
 
        {/* CTA Footer */}
        <div className="text-center pt-4 border-t border-slate-150 max-w-2xl mx-auto space-y-4">
          <p className="text-sm font-semibold text-slate-650">
            ¿Quieres ser parte de los negocios que eliminan el papeleo en O&apos;Higgins?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-slate-cold text-primary hover:text-accent border border-slate-200 hover:border-accent px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="h-4.5 w-4.5 text-accent fill-current shrink-0" />
            <span>Quiero Digitalizar mi Negocio</span>
          </a>
        </div>
 
      </div>
    </section>
  );
}
